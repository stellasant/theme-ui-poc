/** @jsxImportSource theme-ui */

import { useState } from 'react'
import Dialog from 'rc-dialog'

export const Dialogs = () => {
    const [visible, setVisible] = useState(false)

    const onClick = () => {
        setVisible(!visible)
    }

    return (
        <div style={{ margin: 20 }}>
            <p>
                <button type="button" onClick={onClick}>
                    show dialog
                </button>
            </p>
            <Dialog
                visible={visible}
                onClose={onClick}
                maskAnimation="fade"
                sx={{
                    padding: 4,
                    fontWeight: 'heading',
                    fontSize: 2,
                    color: 'text',
                    width: 600,
                    boxShadow: 'large',
                }}
                closeIcon={<span>X</span>}
                title={
                    <div
                        sx={{
                            width: '100%',
                            cursor: 'pointer',
                            padding: 4,
                            borderBottom: '1px solid #000',
                        }}
                    >
                        modal
                    </div>
                }
            >
                <div
                    sx={{
                        height: 200,
                        background: '#f1f1f1',
                        color: 'text',
                        padding: 4,
                    }}
                >
                    Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.
                </div>
            </Dialog>
        </div>
    )
}
