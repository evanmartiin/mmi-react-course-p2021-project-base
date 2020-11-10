import React from 'react'
import FormInput from './FormInput'
import Layout from '../../components/Layout/Layout'

const Form = () => {
    return (
        <Layout removeMenu>
            <div>
                <h1> qu'est-ce qui te ferait plaisir ?</h1>
                <FormInput>
                    BLABLA 1
                </FormInput>
                <FormInput>
                    BLABLA 2
                </FormInput>
                <FormInput>
                    BLABLA 3
                </FormInput>
            </div>
        </Layout>
    )
}

export default Form