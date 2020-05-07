import React from 'react';
import { Form, DatePicker, Input, Modal, Select } from 'antd';
import { ContestDto, ContestAccessType } from '@/domain';
import moment from 'moment';

export type FormValueType = Partial<ContestDto>;

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<ContestDto>;
}
const FormItem = Form.Item;

export interface UpdateFormState {
  formVals: FormValueType;
  currentStep: number;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [form] = Form.useForm();

  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const { id, title, clarification, startTime, endTime, access, problems } = values;
  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    handleUpdate(fieldsValue);
    form.resetFields();
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="规则配置"
      visible={updateModalVisible}
      onOk={handleNext}
      onCancel={() => handleUpdateModalVisible(false, values)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form
        form={form}
        initialValues={{
          id,
          title,
          clarification,
          startTime: moment(startTime),
          endTime: moment(endTime),
          access,
          problems: problems?.map((p) => p.id),
        }}
      >
        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="ID"
          name="id"
          rules={[{ required: true, message: '请输入标题！' }]}
        >
          <Input placeholder="请输入标题" disabled />
        </FormItem>
        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入标题！' }]}
        >
          <Input placeholder="请输入标题" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="声明"
          name="clarification"
          rules={[{ required: true, message: '请输入声明！' }]}
        >
          <Input.TextArea placeholder="请输入声明" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="开始时间"
          name="startTime"
          rules={[{ required: true, message: '请输入开始时间！' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="结束时间"
          name="endTime"
          rules={[{ required: true, message: '请输入结束时间！' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="权限"
          name="access"
          rules={[{ required: true, message: '请选择权限！' }]}
        >
          <Select>
            <Select.Option value={ContestAccessType.PUBLIC}>PUBLICK</Select.Option>
            <Select.Option value={ContestAccessType.PRIVATE}>PRIVATE</Select.Option>
          </Select>
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="问题"
          name="problems"
          rules={[{ required: true, message: '请选择问题！' }]}
        >
          <Select mode="multiple" disabled>
            {problems &&
              problems.map((problem) => {
                return (
                  <Select.Option key={problem.id} value={problem.id}>
                    {problem.title}
                  </Select.Option>
                );
              })}
          </Select>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default UpdateForm;
