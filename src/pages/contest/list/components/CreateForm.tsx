import React, { useState, useEffect } from 'react';
import { Form, Input, Modal, Select, DatePicker } from 'antd';
import { ContestAccessType, ProblemDto } from '@/domain';
import { queryProblem } from '../service';

const FormItem = Form.Item;

interface CreateFormProps {
  modalVisible: boolean;
  onSubmit: (fieldsValue: { desc: string }) => void;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [form] = Form.useForm();

  const [problems, setProblems] = useState<ProblemDto[]>([]);

  useEffect(() => {
    queryProblem().then((resp) => {
      const problmeList = resp.data;
      setProblems(problmeList);
    });
  }, []);
  const { modalVisible, onSubmit: handleAdd, onCancel } = props;
  const okHandle = async () => {
    const fieldsValue = await form.validateFields();
    form.resetFields();
    handleAdd(fieldsValue);
  };
  return (
    <Modal
      destroyOnClose
      title="新建竞赛"
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
          <Select mode="multiple">
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

export default CreateForm;
