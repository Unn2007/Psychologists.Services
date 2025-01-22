import DocumentTitle from '../../components/DocumentTitle';
import {PsychologistList} from '../../components/PsychologistsList/PsychologistsList.jsx'
import css from './PsychologistsPage.module.css'
const PsychologistsPage = () => {
    return (
        <>
        <DocumentTitle>Psychologists</DocumentTitle>
        <PsychologistList/>
        </>
    )
}

export default PsychologistsPage;