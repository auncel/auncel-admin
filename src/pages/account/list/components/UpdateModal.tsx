/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Friday, 8th May 2020 5:47 pm                                *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Friday, 8th May 2020 5:47 pm                               *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { FC, useEffect } from 'react';
import moment from 'moment';
import { Modal, Form, Input, Select } from 'antd';
import { UserRoleType, UserDto } from '@/domain';
import styles from '../style.less';

interface UpdateModalProps {
  visible: boolean;
  current: Partial<UserDto> | undefined;
  onSubmit: (values: UserDto) => void;
  onCancel: () => void;
}

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const UpdateModal: FC<UpdateModalProps> = (props) => {
  const [form] = Form.useForm();
  const { visible, current, onCancel, onSubmit } = props;

  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);

  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current,
        createdAt: current.createdAt ? moment(current.createdAt) : null,
      });
    }
  }, [props.current]);

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = (values: { [key: string]: any }) => {
    if (onSubmit) {
      onSubmit(values as UserDto);
      form.resetFields();
    }
  };

  const modalFooter = { okText: '保存', onOk: handleSubmit, onCancel };

  return (
    <Modal
      title={`用户${current ? '编辑' : '添加'}`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={{ padding: '28px 0 0' }}
      destroyOnClose
      visible={visible}
      {...modalFooter}
    >
      <Form {...formLayout} form={form} onFinish={handleFinish} initialValues={current}>
        <Form.Item name="id" label="ID">
          <Input placeholder="请输入" disabled />
        </Form.Item>
        <Form.Item name="username" label="昵称" rules={[{ required: true, message: '请输入昵称' }]}>
          <Input placeholder="请输入" />
        </Form.Item>

        <Form.Item name="realname" label="姓名">
          <Input placeholder="请输入" />
        </Form.Item>

        <Form.Item name="role" label="角色" rules={[{ required: true, message: '请选择角色' }]}>
          <Select placeholder="请选择">
            <Select.Option value={UserRoleType.ORDINARY}>普通用户</Select.Option>
            <Select.Option value={UserRoleType.ADMIN}>管理员</Select.Option>
            <Select.Option value={UserRoleType.SUPER_USER}>超级管理员</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="school" label="学校">
          <Input placeholder="请输入" />
        </Form.Item>
        {/*
        <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input placeholder="请输入" type="email" />
        </Form.Item>

        <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder="请输入" type="password" />
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default UpdateModal;
