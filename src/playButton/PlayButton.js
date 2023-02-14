import { useState } from 'react';
import { IconButton } from '@fluentui/react';
import './playButton.css';

export const PlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const onClick = () => {
        setIsPlaying(!isPlaying);
    }

    const getIconName = () => {
        if (isPlaying) {
            return 'Pause';
        }
        else {
            return 'Play';
        }
    }

    return (
        <IconButton 
            iconProps={ { iconName: getIconName() }}
            className="playButton"
            styles={{root: {borderRadius: '100%'}}}
            onClick={onClick}
        />
    );
};