import React from 'react';
import { Form, Button, Input, Modal, Select } from 'antd';

import { ProblemDifficulty, ProblemAccessType, ProblemDto } from '@/domain';

export type FormValueType = Partial<ProblemDto>;

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<ProblemDto>;
}
const FormItem = Form.Item;

export interface UpdateFormState {
  formVals: FormValueType;
  currentStep: number;
}

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const {
    values,
    updateModalVisible,
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
  } = props;
  const { id, title, description, html, style, access, difficulty } = values;

  const [form] = Form.useForm();

  const handleSave = async () => {
    const fieldsValue = form.getFieldsValue();

    await handleUpdate(fieldsValue);
    form.resetFields();
  };

  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
        <Button type="primary" onClick={() => handleSave()}>
          保持
        </Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="规则配置"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, values)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{ id, title, description, html, style, access, difficulty }}
      >
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="ID" name="id">
          <Input disabled defaultValue={id} />
        </FormItem>
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
          rules={[{ required: true, message: '请输入描述！' }]}
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

export default UpdateForm;
