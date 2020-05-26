/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Wednesday, 15th April 2020 10:51 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Wednesday, 15th April 2020 10:51 pm                        *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { SubmissionStatus as SubmissionStatusEnum } from '@/domain';
import './styles.css';

interface ISubmissionStatusProps {
  status: SubmissionStatusEnum;
}

export const SubmissionStatus = (props: ISubmissionStatusProps) => {
  const { status } = props;
  switch (status) {
    case SubmissionStatusEnum.ACCEPT: {
      return <span className="submission-accept">Accept</span>;
    }
    case SubmissionStatusEnum.SYNTAX_ERROR:
      return <span className="submission-wrong-anwser">Syntax Error</span>;
    case SubmissionStatusEnum.WRONG_ANWSER:
    default:
      return <span className="submission-wrong-anwser">Wrong Anwser</span>;
    // return <span className={styles.wrongAnwser}>Error</span>;
  }
};

export default SubmissionStatus;
