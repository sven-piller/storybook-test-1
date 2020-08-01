import { render } from '@testing-library/angular';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';
import { withPinnedTasksData } from './task-list.stories';

describe('TaskListComponent', () => {

  test('should create', async () => {
    const tree = await render(TaskListComponent);
    const component = tree.fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  test('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const tree = await render(TaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        tasks: withPinnedTasksData,
        loading: false,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});
