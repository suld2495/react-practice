import React, { useState } from 'react'
import Button from '../../components/Button';
import { FormContainer, Label, Input } from './Form.style';

const Form = ({ onSerach }) => {
    const [subreddit, setSubreddit] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        onSerach(subreddit);
    }
    return (
        <FormContainer onSubmit={onSubmit}>
            <Label>
                r / <Input 
                    type="text"
                    name="subreddit"
                    value={subreddit}
                    onChange={e => setSubreddit(e.target.value)}
                />
            </Label>

            <Button>Search</Button>
        </FormContainer>
    )
}

export default Form
