import React from 'react'
import Layout from '../../components/Layout/Layout'
import RandomButton from '../../components/ToggleButton'
import LoopButton from '../../components/ToggleButton/LoopButton'
import TimerButton from '../../components/ToggleButton/TimerButton'

const Search = () => {
    return (
        <div>
            <Layout>
                Search
                <RandomButton />
                <LoopButton />
                <TimerButton />
            </Layout>
        </div>
    );
}

export default Search