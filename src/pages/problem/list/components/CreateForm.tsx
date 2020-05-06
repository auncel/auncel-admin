import React from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { ProblemDifficulty, ProblemAccessType, ProblemDto } from '@/domain';

const FormItem = Form.Item;

interface CreateFormProps {
  modalVisible: boolean;
  onSubmit: (fieldsValue: Partial<ProblemDto>) => void;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [form] = Form.useForm();

  const { modalVisible, onSubmit: handleAdd, onCancel } = props;
  const okHandle = async () => {
    const fieldsValue = await form.validateFields();
    form.resetFields();
    handleAdd(fieldsValue);
  };
  return (
    <Modal
      destroyOnClose
      title="新建问题"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
    >
      <Form form={form}>
        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入标题', min: 2 }]}
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="描述"
          name="description"
          rules={[{ required: true, message: '请输入描述！', min: 5 }]}
        >
          <Input placeholder="请输入" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="HTML"
          name="html"
          rules={[{ required: true, message: 'HTML 部分答案' }]}
        >
          <Input.TextArea placeholder="请输入 HTML 部分答案" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="CSS"
          name="style"
          rules={[{ required: true, message: 'CSS 部分答案' }]}
        >
          <Input.TextArea placeholder="请输入 CSS 部分答案" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="难度"
          name="difficulty"
          rules={[{ required: true, message: '请选择问题难度' }]}
        >
          <Select>
            <Select.Option value={ProblemDifficulty.Easy}>Easy</Select.Option>
            <Select.Option value={ProblemDifficulty.Medium}>Medium</Select.Option>
            <Select.Option value={ProblemDifficulty.Hard}>Hard</Select.Option>
          </Select>
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="权限"
          name="access"
          rules={[{ required: true, message: '请选择问题权限' }]}
        >
          <Select>
            <Select.Option value={ProblemAccessType.PUBLIC}>PUBLIC</Select.Option>
            <Select.Option value={ProblemAccessType.PRIVATE}>PRIVATE</Select.Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default CreateForm;
