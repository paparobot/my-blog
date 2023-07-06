import { EditorSelection } from '@codemirror/state';
import { ICommand } from '.';

export const strike: ICommand = {
  name: 'strike',
  keyCommand: 'strike',
  button: { 'aria-label': 'Add strike text' },
  icon: (
    <span title='Strike'>
      <svg fill="currentColor" viewBox="0 0 512 550" height="14" width="14">
        <path d="M332.2 319.9c17.22 12.17 22.33 26.51 18.61 48.21-3.031 17.59-10.88 29.34-24.72 36.99-35.44 19.75-108.5 11.96-186-19.68-16.34-6.686-35.03 1.156-41.72 17.53s1.188 35.05 17.53 41.71c31.75 12.93 95.69 35.37 157.6 35.37 29.62 0 58.81-5.156 83.72-18.96 30.81-17.09 50.44-45.46 56.72-82.11 3.998-23.27 2.168-42.58-3.488-59.05H332.2zm155.8-80-176.5-.03c-15.85-5.614-31.83-10.34-46.7-14.62-85.47-24.62-110.9-39.05-103.7-81.33 2.5-14.53 10.16-25.96 22.72-34.03 20.47-13.15 64.06-23.84 155.4.343 17.09 4.53 34.59-5.654 39.13-22.74 4.531-17.09-5.656-34.59-22.75-39.12-91.31-24.18-160.7-21.62-206.3 7.654C121.8 73.72 103.6 101.1 98.09 133.1c-8.83 51.4 9.81 84.2 39.11 106.8H24c-13.25 0-24 10.75-24 23.1 0 13.25 10.75 23.1 24 23.1h464c13.25 0 24-10.75 24-23.1 0-12.3-10.7-23.1-24-23.1z" />
      </svg>
    </span>

  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    view.dispatch(
      view.state.changeByRange((range) => ({
        changes: [
          { from: range.from, insert: '~~' },
          { from: range.to, insert: '~~' },
        ],
        range: EditorSelection.range(range.from + 2, range.to + 2),
      })),
    );
  },
};
