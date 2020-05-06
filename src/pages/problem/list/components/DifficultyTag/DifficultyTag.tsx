/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 19th April 2020 10:32 am                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 19th April 2020 10:32 am                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { ProblemDifficulty } from '@/domain';

interface IDifficultyProps {
  type?: ProblemDifficulty;
}

export const DifficultyTag: React.FC<IDifficultyProps> = (props) => {
  const { type } = props;
  switch (type) {
    case ProblemDifficulty.Hard:
      return <span className="difficultyTagHard">Hard</span>;
    case ProblemDifficulty.Medium:
      return <span className="difficultyTagMedium">Medium</span>;
    default:
      return <span className="difficultyTagEasy">Easy</span>;
  }
};

export default DifficultyTag;
