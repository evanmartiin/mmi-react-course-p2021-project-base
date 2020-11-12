import React from 'react'
import Layout from '../../components/Layout/Layout'
import Tracks from './Tracks'

const Search = () => {
    return (
        <div>
            <Layout removeReturn>
                Search
                <Tracks />
            </Layout>
        </div>
    );
}

export default Search