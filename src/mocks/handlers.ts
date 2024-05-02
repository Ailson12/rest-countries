import { CountryType } from '@/types/coutry'
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/all`, () => {
    return HttpResponse.json<CountryType[]>([
      {
        capital: ['Brasília'],
        region: 'Americas',
        population: 212559409,
        flags: {
          svg: 'https://flagcdn.com/br.svg'
        },
        translations: {
          por: {
            common: 'Brasil'
          }
        }
      },
      {
        capital: ['Washington, D.C.'],
        region: 'Americas',
        population: 329484123,
        flags: {
          svg: 'https://flagcdn.com/us.svg'
        },
        translations: {
          por: {
            common: 'Estados Unidos'
          }
        }
      }
    ])
  }),
]
