import React from 'react'
import FormInput from './FormInput'
import Layout from '../../components/Layout/Layout'
import styles from './styles.css'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

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
                <Button><Link to="/Home">Endors toi</Link></Button>
            </div>
        </Layout>
    )
}

export default Form