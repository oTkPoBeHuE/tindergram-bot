import React from 'react';
import { Image } from 'urban-bot';
import { Profile } from '../../Common/api/requests/getProfile';
import { lang } from '../../Common/lang';
import { ButtonGroupProps } from 'urban-bot/dist/components/ButtonGroup';

type Props = {
    profile: Profile;
    buttons?: React.FunctionComponentElement<ButtonGroupProps>;
};

export function UserProfile({ profile, buttons }: Props) {
    return (
        <Image
            file={profile.avatar}
            title={
                <>
                    <b>{profile.name}</b>
                    <br />
                    Возраст: <i>{lang.AGE(profile.birthday)}</i> <br />
                    ___________________________________________________________________ <br />
                    <i>{profile.description}</i> <br />
                </>
            }
            buttons={buttons}
        />
    );
}
