import React, { useState } from 'react'
import './BlocForm.css'
import Input from '../Input/Input'

export default function BlocForm({Role}) {
    const [name, setName] = useState<string>('');
    const [surName, setSurName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [tel, setTel] = useState<string>('');

    // const selectdynamique = () : void => {
    //     const depart = document.getElementById('depart').value;
    //     const post = document.getElementById('post');
    //     switch(depart){
    //         case 'academique':
    //             post?.innerHTML += '<option value="DAC" >Directeur des affaire academique</option>';
    //         break;
    //     }
    // }
    return (
    <div className='BlocForm'>
        <form action="">
            <Input value={name} setValue={(e) => setName(e.target.value)} id={name} required={true}   />
            <Input value={surName} setValue={(e) => setSurName(e.target.value)} id={surName} required={true}   />
            <Input value={email} setValue={(e) => setEmail(e.target.value)} id={email} required={true}   />
            <Input value={password} setValue={(e) => setPassword(e.target.value)} id={password} required={true}   />
            <Input value={tel} setValue={(e) => setTel(e.target.value)} id={tel} required={false}   />
            {Role == 'administratif' ?(<>
                <select name="depart" id="depart">
                    <option value="academique">Academique</option>
                    <option value="Informatique">Informatique</option>
                    <option value="marketing">marketing</option>
                    <option value="Logistique">Logistique</option>
                    <option value="Securiter">Securiter</option>
                    <option value="Medical">Medical</option>
                </select>
                <select name="post" id="post">
                    <option value="Bibliothecaire">Bibliothecaire</option>
                    <option value="Dac">Directeur des affaire accademique</option>
                    <option value="REC">Recteur</option>
                    <option value="Vice">vice president</option>
                    <option value="President">President</option>
                </select>
            </>) :(<>
                <select name="cycle" id="cycle">
                    <option value="DUT">Dut</option>
                    <option value="Doctorat">Doctorat</option>
                    <option value="ingenieur">ingenieur</option>
                    <option value="prepa">prepa</option>
                </select>
                <select name="filiere" id="filiere">
                    <option value="Informatique">Informatique</option>
                    <option value="Marketing">Marketing</option>
                    <option value="E-commerce">E-commerce</option>
                </select>
            </>) }
            <button type="submit">allonsy</button>
        </form>
    </div>
  )
}
