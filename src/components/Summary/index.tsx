import incoming from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./sytle";


export function Summary() {

    const {transactions} = useTransactions()

    const summary = transactions.reduce( (acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrwas += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc
    }, {
        deposits: 0,
        withdrwas: 0,
        total: 0,
    })

    
    return (
        <Container>
            {/* old */}
            {/* <TransactionContext.Consumer>
                {(data) => {
                    console.log(data)

                    return <p>Ok</p>
                }}
            </TransactionContext.Consumer> */}
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incoming} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saídas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdrwas)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}