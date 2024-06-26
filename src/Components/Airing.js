import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import styled from 'styled-components';
import Sidebar from './Sidebar';

function Airing({ rendered }) {
    const { airingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'airing') {
            return airingAnime?.map((anime) => {
                return (
                    <AnimeLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </AnimeLink>
                );
            });
        } else {
            return searchResults?.map((anime) => {
                return (
                    <AnimeLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </AnimeLink>
                );
            });
        }
    };

    return (
        <PopularStyled>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    );
}

const PopularStyled = styled.div`
    display: flex;

    .airing-anime {
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 5rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  /* Adjusted minimum size */
        grid-gap: 1.5rem;  /* Smaller gaps for tighter arrangement */
        background-color: rgb(27, 18, 18);  /* Softer white background */
        border-top: 5px solid #e5e7eb;
        
        a {
            height: 400px;  /* Reduced height */
            border-radius: 10px;  /* Softer rounding */
            border: 4px solid rgb(255, 105, 180);  /* Brighter anime-inspired border color */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
            padding: 0.5rem;  /* Added padding for better spacing */
        }

        a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;  /* Increased rounding */
        }
    }
`;

const AnimeLink = styled(Link)` 
    transition: transform 0.3s ease-in-out;  /* Smooth transition effect */

    &:hover {
        transform: scale(1.05);  /* Slight enlargement on hover */
    }
`;

export default Airing;
