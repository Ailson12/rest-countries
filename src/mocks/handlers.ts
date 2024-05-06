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
  http.get(`${import.meta.env.VITE_API_URL}/region/*`, () => {
    return HttpResponse.json([
      {
        capital: ['Mamoudzou'],
        region: 'Africa',
        population: 226915,
        flags: {
          svg: 'https://flagcdn.com/yt.svg'
        },
        translations: {
          por: {
            common: 'Mayotte'
          }
        }
      },
      {
        capital: ['Maputo'],
        region: 'Africa',
        population: 31255435,
        flags: {
          svg: 'https://flagcdn.com/mz.svg'
        },
        translations: {
          por: {
            common: 'Moçambique'
          }
        }
      },
      {
        capital: ['Praia'],
        region: 'Africa',
        population: 555988,
        flags: {
          svg: 'https://flagcdn.com/cv.svg'
        },
        translations: {
          por: {
            common: 'Cabo Verde'
          }
        }
      },
    ])
  }),
  http.get(`${import.meta.env.VITE_API_URL}/name/*`, () => {
    return HttpResponse.json([
      {
        capital: ['Praia'],
        region: 'Africa',
        population: 555988,
        flags: {
          svg: 'https://flagcdn.com/cv.svg'
        },
        translations: {
          por: {
            common: 'Cabo Verde'
          }
        }
      },
    ])
  })
]
