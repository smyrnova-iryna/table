'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<p className='flex align-center items-center gap-2 rounded-lg border-[1px] border-solid border-secondary2 p-2'>
			<input className='cursor-pointer' type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
			<span>Dark mode</span>
		</p>
		
	);
};

export default ThemeToggler;