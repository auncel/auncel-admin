/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 26th May 2020 11:13 am                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 26th May 2020 11:13 am                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react';
import { Table, message, Modal, Button } from 'antd';
import dayjs from 'dayjs';
import { UserDto, SubmissionDto, SubmissionStatus as SubmissionStatusEnum } from '@/domain';
import { ColumnsType } from 'antd/lib/table';
import { UnorderedListOutlined } from '@ant-design/icons';
import { SubmissionStatus } from './SubmisionStatus';
import { querySatistics } from '../service';

const submissionColumns = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render(id: number): string {
      return String(id).padStart(3, '0');
    },
  },
  {
    title: 'Submiter',
    dataIndex: 'submiter',
    key: 'submiter',
    render(submiter: UserDto, record: SubmissionDto) {
      return record.submiter.username;
    },
  },
  {
    title: 'Exe Time',
    dataIndex: 'exeTime',
    key: 'exeTime',
    render(exeTime: number) {
      return exeTime > 0 ? `${exeTime} ms` : 'N/A';
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render(status: SubmissionStatusEnum) {
      return <SubmissionStatus status={status} />;
    },
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render(createdAt: string): string {
      return dayjs(createdAt).format('YYYY-MM-DD hh:mm:ss');
    },
  },
] as ColumnsType<SubmissionDto>;

interface IStatisticsButtonProps {
  problemId: number;
  makerId: number;
}

const StatisticsButton: React.FC<IStatisticsButtonProps> = (props) => {
  const { problemId, makerId } = props;

  const [show, setShow] = useState(false);
  const [subission, setSubmission] = useState<SubmissionDto[]>();

  useEffect(() => {
    async function fetchSubmission() {
      if (show) {
        try {
          const respData = await querySatistics({ problemId });
          setSubmission(respData.data);
        } catch (err) {
          message.error(err.toString());
        }
      }
    }

    fetchSubmission();
  }, [problemId, show]);

  return (
    <>
      <Button
        type="link"
        onClick={async () => {
          setShow(true);
        }}
        disabled={(window as any)?.currentUser?.id !== makerId}
      >
        统计 <UnorderedListOutlined />
      </Button>
      <Modal
        visible={show}
        title="提交情况"
        width={800}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
      >
        <div style={{ margin: 'auto' }}>
          <Table
            columns={submissionColumns}
            dataSource={subission}
            pagination={{
              hideOnSinglePage: true,
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export { StatisticsButton };

export default StatisticsButton;
