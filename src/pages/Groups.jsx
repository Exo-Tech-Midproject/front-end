import CreateGroup from '../components/Groups/CreateGroup'
import GroupHero from '../components/Groups/GroupHero'

export default function Groups() {
    const divStyle = {
        minHeight:"80vh"
    };
    return (
        <div style={divStyle}>
            <GroupHero />
            <CreateGroup />
        </div>
    )
}
