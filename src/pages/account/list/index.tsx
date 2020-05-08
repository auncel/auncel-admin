import React, { FC, useRef, useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, List } from 'antd';

import { findDOMNode } from 'react-dom';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import moment from 'moment';
import { UserDto, UserRoleType } from '@/domain';
import Exception403 from '@/pages/exception/403';
import OperationModal from './components/OperationModal';
import UpdateModal from './components/UpdateModal';
import { StateType } from './model';
import styles from './style.less';

interface BasicListProps {
  AcountList: StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}

const ListContent = ({ data: { realname, createdAt, role, registerIp } }: { data: UserDto }) => (
  <div className={styles.listContent}>
    <div className={styles.listContentItem}>
      <span>真名</span>
      <p>{realname || '-'}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>角色</span>
      <p>{role}</p>
    </div>

    <div className={styles.listContentItem}>
      <span>IP</span>
      <p>{registerIp}</p>
    </div>
    <div className={styles.listContentItem}>
      <span>注册时间</span>
      <p>{moment(createdAt).format('YYYY-MM-DD HH:mm')}</p>
    </div>
    {/* <div className={styles.listContentItem}>
      <Progress percent={percent} status={status} strokeWidth={6} style={{ width: 180 }} />
    </div> */}
  </div>
);

export const AccountList: FC<BasicListProps> = (props) => {
  const addBtn = useRef(null);
  const {
    loading,
    dispatch,
    AcountList: { list },
  } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [updateVisible, setUpdateVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<UserDto> | undefined>(undefined);

  useEffect(() => {
    dispatch({
      type: 'AcountList/fetch',
      payload: {
        count: 5,
      },
    });
  }, [1]);

  const showModal = () => {
    setVisible(true);
    setCurrent(undefined);
  };

  const showEditModal = (item: UserDto) => {
    setUpdateVisible(true);
    setCurrent(item);
  };

  const setAddBtnblur = () => {
    if (addBtn.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const addBtnDom = findDOMNode(addBtn.current) as HTMLButtonElement;
      setTimeout(() => addBtnDom.blur(), 0);
    }
  };

  const handleCancel = () => {
    setAddBtnblur();
    setVisible(false);
    setUpdateVisible(false);
  };

  const handleSubmit = (values: UserDto) => {
    const id = current ? current.id : '';

    setAddBtnblur();

    dispatch({
      type: 'AcountList/submit',
      payload: { id, ...values },
    });
    setVisible(false);
    setUpdateVisible(false);
  };

  if ((window as any).currentUser.role !== UserRoleType.SUPER_USER) {
    return <Exception403 />;
  }

  return (
    <div>
      <PageHeaderWrapper>
        <div className={styles.standardList}>
          <Card
            className={styles.listCard}
            bordered={false}
            title="用户列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
          >
            <Button
              type="dashed"
              style={{ width: '100%', marginBottom: 8 }}
              onClick={showModal}
              ref={addBtn}
            >
              <PlusOutlined />
              添加
            </Button>

            <List
              size="large"
              rowKey="id"
              loading={loading}
              dataSource={list}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a
                      key="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        showEditModal(item);
                      }}
                    >
                      编辑
                    </a>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} shape="square" size="large" />}
                    title={<a href={`http://www.auncel.top/u/${item.username}`}>{item.username}</a>}
                    description={item.slogan}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageHeaderWrapper>

      <OperationModal
        current={current}
        visible={visible}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
      <UpdateModal
        current={current}
        visible={updateVisible}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default connect(
  ({
    AcountList,
    loading,
  }: {
    AcountList: StateType;
    loading: {
      models: { [key: string]: boolean };
    };
  }) => ({
    AcountList,
    loading: loading.models.AcountList,
  }),
)(AccountList);
