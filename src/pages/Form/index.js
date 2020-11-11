import React from 'react'
import FormInput from './FormInput'
import Layout from '../../components/Layout/Layout'
import './styles.css'
import Button from '../../components/Button'

const Form = () => {
    return (
        <Layout removeMenu>
            <div  className="formInput">
                <h1>Qu'est-ce qui te ferait plaisir ?</h1>
                <FormInput>
                    ASMR 
                </FormInput>
                <FormInput>
                    Méditation Hypnose
                </FormInput>
                <FormInput>
                    Exercices de respiration
                </FormInput>
                <FormInput>
                    Ambiances naturelles
                </FormInput>
                <FormInput>
                    Musiques relaxantes
                </FormInput>
                <FormInput>
                    Musiques classiques
                </FormInput>
                <FormInput>
                    Histoires/Podcasts
                </FormInput>
                <FormInput>
                    Histoires pour enfants
                </FormInput>
                <Button linkTo="/Home">Endors-toi</Button>
            </div>
        </Layout>
    )
}

export default Form