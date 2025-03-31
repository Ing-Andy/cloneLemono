import React, { useState } from 'react'
import './BlocForm.css'
import Input from '../Input/Input'

const BlocForm: React.FC<{Role: string}> = ({Role}) => {
    const [name, setName] = useState<string>('');
    const [surName, setSurName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [isForConnect, setIsForConnect] = useState<Boolean>(false);
    const handleForm = (): void => {
        setIsForConnect(!isForConnect)
    }
    return (
        <div className='BlocFormContainer'>
            <div className='BlocForm'>
                <h4>Entrer vos donnez pour vous {isForConnect == false ? "enregistrer" : "connecter"}</h4>
                <form action="" className='Form' method='post'>
                    <div className="DivInput">
                        <Input value={name} setValue={(e) => setName(e.target.value)} type="text" id={name} nom="Name" required={true} couleur="rgba(200, 155, 0, 1)"  />
                        <Input value={surName} setValue={(e) => setSurName(e.target.value)} type="text" id={surName} nom="Surname" required={true} couleur="rgba(200, 155, 0, 1)"  />
                        <Input value={email} setValue={(e) => setEmail(e.target.value)} type="email" id={email} nom="E-mail" required={true} couleur="rgba(200, 155, 0, 1)"  />
                        <Input value={password} setValue={(e) => setPassword(e.target.value)} type="password" id={password} nom="Password" required={true} couleur="rgba(200, 155, 0, 1)"  />
                        <Input value={tel} setValue={(e) => setTel(e.target.value)} type="number" id={tel} nom="Tel" required={false} couleur="rgba(200, 155, 0, 1)"  />
                    </div>
                    {isForConnect == false ? (
                        Role == 'administratif' ?(<div className='DivSelect'>
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
                                <select name="post" id="post">
                                <option value="Bibliothecaire">Bibliothecaire</option>
                                <option value="Dac">Directeur des affaire accademique</option>
                                <option value="REC">Recteur</option>
                                <option value="Vice">vice president</option>
                                <option value="President">President</option>
                            </select>
                        </div>) :(<div className='DivSelect'>
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
                            <select name="filiere" id="filiere">
                                <option value="Informatique">Informatique</option>
                                <option value="Marketing">Marketing</option>
                                <option value="E-commerce">E-commerce</option>
                            </select>
                        </div>)
                    ) : (<></>)}
                    <button className='up' type="submit">allonsy</button>
                    <p className='pend'>A la place aurais vous souhaiter vous {isForConnect == false ? <button className='upp' onClick={handleForm}>incrire</button>:<button className='upp' onClick={handleForm}>connecter</button>} ?</p>
                </form>
            </div>
        </div>
    )
}


export default BlocForm