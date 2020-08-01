// src/app/components/task.stories.ts
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';

export default {
  title: 'Task',
  excludeStories: /.*Data$/,
  parameters: {
    backgrounds: [
      { name: 'original', value: '#26c6da', default: true },
      { name: 'red', value: '#ff0000' },
      { name: 'black', value: '#000000' },
      { name: 'white', value: '#ffffff' },
    ]
  },
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

export const Default = () => ({
  component: TaskComponent,
  props: {
    task: taskData,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

// pinned task state
export const Pinned = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_PINNED',
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

// archived task state
export const Archived = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED',
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
