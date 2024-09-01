'use client';

import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';


interface PaginationProps {
    paginationValue: number,
    paginationCount: number,
    setPaginationValue: (value: number) => void
}

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: 8
});

export default function Pagination(props: PaginationProps) {
    const { items } = usePagination({
        count: props.paginationCount,
        boundaryCount: 0,
        onChange: (event, page) => props.setPaginationValue(page),
        page: props.paginationValue
      });
    
    
    return (
        <nav className='w-full h-[63px] flex justify-center items-center dark:bg-darkprimary1'>
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                let children = null;

                if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                    children = "";
                } else if (type === 'page') {
                    children = (
                    <button
                        className={`text-sm h-[31px] w-[31px] rounded-lg font-medium ${selected ? 'bg-accent1 text-white' : 'bg-secondary1 text-black dark:text-white dark:bg-darksecondary1'}`}
                        type="button"
                        {...item}
                    >
                        {page}
                    </button>
                    );
                } else {
                    children = (
                    <button className='h-full flex items-center mr-1 text-sm text-secondary2 text-secondary2 dark:text-white' type="button" {...item}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                    );
                }

                return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
  );
  }