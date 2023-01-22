import { Card, Col, Row, Statistic } from 'antd';
import moment from 'moment/moment';
import { StatisticsStyle } from './style';

export default function Statistics() {

    const date = `${moment().format('dddd')
        }, ${moment().format('LL')}`

    return (
        <StatisticsStyle>

            <header>
                <p>Estatísticas de hoje</p>
                <small>{date}</small>
            </header>

            <div className="site-statistic-demo-card">
                <Row gutter={18}>
                    <Col span={4}>
                        <Card className='statistic'>
                            <Statistic
                                title="Ganhos do mês"
                                value={2370}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix="R$"
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card className='statistic'>
                            <Statistic
                                title="Ganhos do dia"
                                value={180}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix="R$"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </StatisticsStyle>
    )
}