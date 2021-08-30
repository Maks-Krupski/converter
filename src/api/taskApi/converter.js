import { Task } from '../../entities/task';

export const converter = (tasks) => tasks.reduce((acc, task) => {
  acc.push(new Task({
    curName: task.Cur_Name,
    curAbbreviation: task.Cur_Abbreviation,
    curRate: task.Cur_OfficialRate,
  }));

  return acc;
}, []);
