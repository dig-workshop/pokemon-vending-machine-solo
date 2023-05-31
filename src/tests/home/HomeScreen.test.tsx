import {screen} from '@testing-library/react'
import renderApplication from '../RenderApplication'
import AppPropsBuilder from '../../AppPropsBuilder'

describe('HomeScreenテスト', () => {
    test('購入画面のページタイトルが表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())
        expect(screen.getByText('Pokemon Vending Machine')).toBeInTheDocument()
    })
    test('各パックの画像が表示されていること', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())
        expect(screen.getByAltText('pack_ver1')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver2')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver3')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver4')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver5')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver6')).toBeInTheDocument()
    })

    test('各パックの値段が表示されていること', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())
        expect(screen.getByText('￥260')).toBeInTheDocument()
        expect(screen.getByText('￥180')).toBeInTheDocument()
        expect(screen.getByText('￥290')).toBeInTheDocument()
        expect(screen.getByText('￥310')).toBeInTheDocument()
        expect(screen.getByText('￥170')).toBeInTheDocument()
        expect(screen.getByText('￥410')).toBeInTheDocument()
    })

})