import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import Navbar from './components/Navbar'
import Exchanges from './components/Exchanges'
import Homepage from './components/Homepage'
import Cryptocurrencies from './components/Cryptocurrencies'
import News from './components/News'
import CryptoDetails from './components/CryptoDetails'

import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path='/' element={<Homepage />} />
                            <Route exact path='/exchanges' element={<Exchanges />} />
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                            <Route exact path='/news' element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All Rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchange</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div >
    )
}

export default App