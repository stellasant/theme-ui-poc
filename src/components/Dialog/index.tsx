/** @jsxImportSource theme-ui */

import { useState } from 'react'
import Draggable from 'react-draggable'
import  Dialog from 'rc-dialog'

export const Dialogs = () => {
  const [visible, setVisible] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const onClick = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ margin: 20 }}>
      <p>
        <button type='button' onClick={onClick}>
          show dialog
        </button>
      </p>
      <Dialog
        visible={visible}
        animation='slide-fade'
        maskAnimation='fade'
        onClose={onClose}
        sx={{
          padding: 4,
          fontWeight: 'heading',
          fontSize: 2,
          color: 'text',
          width: 600
        }}
        title={
          <div
            sx={{
              width: '100%',
              cursor: 'pointer',
              padding: 4,
              borderBottom: '1px solid #000'
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            modal
          </div>
        }
        modalRender={(modal) => (
          <Draggable disabled={disabled}>{modal}</Draggable>
        )}
      >
        <div
          sx={{
            height: 200,
            background: '#f1f1f1',
            color: 'text',
            padding: 4
          }}
        >
          Day before yesterday I saw a rabbit, and yesterday a deer, and today,
          you.
        </div>
      </Dialog>
    </div>
  );
}