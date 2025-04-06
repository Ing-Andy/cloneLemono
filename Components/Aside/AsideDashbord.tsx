import React from 'react'
import './asideDashbord.css'
import { Megaphone, Computer, Cross, Euro, GraduationCap, Hospital, School, SprayCan, Truck, Settings, LogOut } from 'lucide-react'

export default function AsideDashbord() {
  return (
    <div className='containerAside'>
        <div className="haut">
        <h3>Departement</h3>
        <table className='table'>
            <tr>
                <td className = "icones"><GraduationCap color='rgba(200, 155, 0, 1)'/></td>
                <td className='d'>Academique</td>
            </tr>
            <tr>
                <td className = "icones"><Computer color='rgba(200, 155, 0, 1)'/></td>
                <td className='d'>informatique</td>
            </tr>       
            <tr>
                <td className = "icones"><Truck color='rgba(200, 155, 0, 1)'/></td>
                <td className='d'>logistique</td>
            </tr>
            <tr>
                <td className = "icones"><Euro color='rgba(200, 155, 0, 1)'/></td>
                <td className='d'>Financier</td>
            </tr>
            <tr>
                <td className = "icones"><Megaphone color='rgba(200, 155, 0, 1)'/></td>
                <td> marketing</td>
            </tr>
            <tr>
                <td className = "icones"><Cross color='rgba(200, 155, 0, 1)'/></td>
                <td className='d'>Medical</td>
            </tr>
        </table>
        </div>
        <div className="parametreDeconnection">
            <table>
                <tr> 
                    <td className = "icones"><Settings color='rgba(200, 155, 0, 1)' id='text' /></td>
                    <td className='d'><label htmlFor="text">parametre</label></td>
                </tr>
                <tr>
                    <td className = "icones"><LogOut color='rgba(200, 155, 0, 1)' id='test'/></td>
                    <td className='d'><label htmlFor="test">deconnection</label></td>
                </tr>
            </table>
        </div>
    </div>
  )
}
