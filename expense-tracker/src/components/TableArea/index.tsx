import * as C from './styles'
import { items } from '../../data/items'
import { Item } from '../../Types/Item'

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
               
            </thead>
            <tbody>
                {list.map((items, index)=>(
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{ items.title }</td>
                        <td></td>

                    </tr>

                ))}

            </tbody>
        </C.Table>
    )

}















