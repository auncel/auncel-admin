import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, message, Tag, Divider } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { ProblemDto, UserDto, ProblemAccessType, ProblemDifficulty, TagDto } from '@/domain';
import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
import { DifficultyTag } from './components/DifficultyTag';

const tagColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];
function getColor(text: string): string {
  const hexString = text
    .split('')
    .map((c) => c.charCodeAt(0).toString(16))
    .join('');
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const hex of hexString) {
    sum += parseInt(hex, 16);
  }
  return tagColors[sum % tagColors.length];
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: Partial<ProblemDto>) => {
  const hide = message.loading('正在添加');
  try {
    await addRule({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新节点
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在配置');
  try {
    await updateRule({
      ...fields,
    });
    hide();

    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

/**
 *  删除节点
 * @param problem
 */
const handleRemove = async (problem: ProblemDto) => {
  const hide = message.loading('正在删除');
  if (!problem) return true;
  try {
    await removeRule({
      id: problem.id,
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<ProblemDto>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'title',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      render(tags: TagDto[]) {
        return (
          tags &&
          tags.map((tag: TagDto) => (
            <Tag key={tag.value + tag.id} color={getColor(tag.value)}>
              {tag.value}
            </Tag>
          ))
        );
      },
    },
    {
      title: '权限',
      dataIndex: 'access',
      valueType: 'text',
      render: (access: ProblemAccessType) => {
        return access.toString();
      },
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      render: (difficulty: ProblemDifficulty) => {
        return <DifficultyTag type={difficulty} />;
      },
    },
    {
      title: '创建者',
      dataIndex: 'maker',
      render: (maker: UserDto) => {
        return maker.username;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      sorter: true,
      valueType: 'dateTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            编辑 <EditOutlined />
          </a>
          <Divider type="vertical" />
          <a
            onClick={async () => {
              await handleRemove(record);
              actionRef.current!.reload();
            }}
          >
            删除 <DeleteOutlined />
          </a>
        </>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<ProblemDto>
        headerTitle="问题列表"
        actionRef={actionRef}
        rowKey="key"
        search={false}
        toolBarRender={(action, { selectedRows }) => [
          <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
            新建
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Button
              onClick={async () => {
                //  await handleRemove(selectedRows);  action.reload();
              }}
            >
              删除 <DeleteOutlined />
            </Button>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys }) => (
          <div>
            已选择{' '}
            <a style={{ fontWeight: 600 }}>
              {selectedRowKeys.length} {selectedRowKeys.join('|')}
            </a>{' '}
            项
            {/* &nbsp;&nbsp;
            <span>
              服务调用次数总计 {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
            </span> */}
          </div>
        )}
        request={(params) => queryRule(params)}
        columns={columns}
        rowSelection={false}
      />
      <CreateForm
        onSubmit={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default TableList;
