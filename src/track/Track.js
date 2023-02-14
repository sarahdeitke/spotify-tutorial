import './track.css';

export const Track = (props) => {
    return (
        <div className={props.isSelected ? "trackContainerSelected" : "trackContainer"}>
            <img src={props.cover}/>
            <div>{props.name}</div>
            <div>{props.artist}</div>
            <div>{props.album}</div>
        </div>
    );
};
