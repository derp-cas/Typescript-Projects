import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ItemListProps } from './types';
const List = (props: ItemListProps) => {
    const { items, removeItem, editItem } = props;

    return (
        <div className='grocery-list'>
            {items.map((item) => {
                const { id, title } = item;

                return (
                    <article className='grocery-item' key={id}>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button
                                className='edit-btn'
                                type='button'
                                onClick={() => editItem(id)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className='delete-btn'
                                type='button'
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;
