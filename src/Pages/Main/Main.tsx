import React from 'react';
import { Text } from 'urban-bot';

export function Main() {
    return (
        <Text isNewMessageEveryRender>
            Добро пожаловать в <i>Tindergram</i> <br />
            <b>/profile</b> - Профиль
        </Text>
    );
}
