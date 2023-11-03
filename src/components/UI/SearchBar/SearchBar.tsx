"use client";

import React, { useState } from 'react';
// import Select from 'react-select';
import styles from './SearchBar.module.scss';
import  OptionTypeBase  from 'react-select';
import { BsSearch } from 'react-icons/bs';
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

const options = [
    { value: 'vacancies', label: 'Vacancies' },
    { value: 'contenders', label: 'Contenders' }
];

export const SearchBar = () => {
    const [selectedOption, setSelectedOption] = useState<OptionTypeBase | null>(null);
    const [searchText, setSearchText] = useState('');

    const handleOptionChange = (selectedOption: OptionTypeBase | null) => {
        setSelectedOption(selectedOption);
    };

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        // TODO: Implement search logic
    };

    return (
        <div className={styles.searchbar}>
            <div className={styles.container}>
                <Select
                    className={styles.select}
                    value={selectedOption}
                    onChange={handleOptionChange as any}
                    options={options as any}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleSearchTextChange}
                />
                <button className={styles.button} onClick={handleSearch}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

