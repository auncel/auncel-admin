import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, Dispatch, FormattedMessage, formatMessage } from 'umi';
import React, { FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface BasicFormProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const BasicForm: FC<BasicFormProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const onFinish = (values: { [key: string]: any }) => {
    const { dispatch } = props;
    dispatch({
      type: 'problem/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: { [key: string]: any }) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageHeaderWrapper content={<FormattedMessage id="new-problem.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="new-problem.title.label" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'new-problem.title.required' }),
              },
            ]}
          >
            <Input placeholder={formatMessage({ id: 'new-problem.title.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="new-problem.date.label" />}
            name="date"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'new-problem.date.required' }),
              },
            ]}
          >
            <RangePicker
              style={{ width: '100%' }}
              placeholder={[
                formatMessage({ id: 'new-problem.placeholder.start' }),
                formatMessage({ id: 'new-problem.placeholder.end' }),
              ]}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="new-problem.goal.label" />}
            name="goal"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'new-problem.goal.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: 'new-problem.goal.placeholder' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="new-problem.standard.label" />}
            name="standard"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'new-problem.standard.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: 'new-problem.standard.placeholder' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="new-problem.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="new-problem.form.optional" />
                  <Tooltip title={<FormattedMessage id="new-problem.label.tooltip" />}>
                    <InfoCircleOutlined style={{ marginRight: 4 }} />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input placeholder={formatMessage({ id: 'new-problem.client.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="new-problem.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="new-problem.form.optional" />
                </em>
              </span>
            }
            name="invites"
          >
            <Input placeholder={formatMessage({ id: 'new-problem.invites.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="new-problem.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="new-problem.form.optional" />
                </em>
              </span>
            }
            name="weight"
          >
            <InputNumber
              placeholder={formatMessage({ id: 'new-problem.weight.placeholder' })}
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="new-problem.public.label" />}
            help={<FormattedMessage id="new-problem.label.help" />}
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="new-problem.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="new-problem.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="new-problem.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem style={{ marginBottom: 0 }} name="publicUsers">
                <Select
                  mode="multiple"
                  placeholder={formatMessage({ id: 'new-problem.publicUsers.placeholder' })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="new-problem.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="new-problem.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="new-problem.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="new-problem.form.submit" />
            </Button>
            <Button style={{ marginLeft: 8 }}>
              <FormattedMessage id="new-problem.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['problem/submitRegularForm'],
}))(BasicForm);
