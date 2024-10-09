import React, {useEffect} from 'react';

import { useLoaderData } from 'react-router';
import CharactersDetail from '../components/CharactersDetail';

const CharactersDetailPage = () => {
    const character = useLoaderData();

    useEffect(() => {
        document.title = `${character.name} | Marvel App`;       
    }, [character]);

    return (
        <>
            <characterDetail character={character} />
        </>
    );
};

export default CharactersDetailPage;