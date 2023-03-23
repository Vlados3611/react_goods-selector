import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleRemove = () => {
    this.setState({ selectedGood: '' });
  };

  handleAdd = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;
    const { handleAdd, handleRemove } = this;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          <>
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}

            {selectedGood && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleRemove}
                aria-label="clear"
              />
            )}
          </>
        </h1>

        <table className="table">
          <tbody>

            {goods.map(good => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    {
                      'has-background-success-light': isSelected,
                    },
                  )}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={handleRemove}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => handleAdd(good)}
                        >
                          +
                        </button>
                      )}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
