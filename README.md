<div align="center" style="background-color: #464646; padding: 2.5em;">
<img src="src/images/logo_jeja.svg">
<br>

### Jennifer Jakobsson
</div>
<br>

# Backend-baserad webbutveckling
### Moment 2.2, DT207G

<br>
<br>

# Introduktion till webbtjänster

>### Laboration i moment 2.2:
>I denna laboration har jag skapat en webbplats ([länk till publicerad webbplats]()) som använder Fetch API för att hämta, skicka och radera data till och från en webbtjänst. Jag har använt mig utav PostgreSQL för att skapa webbtjänsten. 
>
><b>Nedan finns en länk till webbtjänsten samt dess metoder, anrop och tabell:</b>

<br>

[Länk till API](https://jeja2306-dt207g-moment2-1.onrender.com/cv/workexperience) (publicerad på Render.com)
<br>
[Länk till Github-repo för webbtjänst](https://github.com/jenniferchristine/jeja2306-dt207g-moment2.1.git)

<br>

| Databas: cv | Tabell: workexperience |
|-----------------|-----------------|
| id | SERIAL PRIMARY KEY NOT NULL |
| companyname | VARCHAR(255) NOT NULL |
| jobtitle | VARCHAR(255) NOT NULL |
| location | VARCHAR(255) NOT NULL |
| description | TEXT |

<br>

### Användning av databas:

<br>

| Metod | Ändpunkt | Beskrivning |
|-----------------|-----------------|-----------------|
| GET | /cv | Hämtar databasen datan är lagrad i |
| GET | /cv/workexperience | Hämtar alla tillgängliga kurser |
| GET | /cv/workexperience/:id | Hämtar specifik kurs med angivet ID |
| POST | /cv/workexperience | Lagrar en ny jobberfarenhet |
| PUT | /cv/workexperience/:id | Uppdaterar en specifik jobberfarenhet |
| DELETE | /cv/workexperience/:id | Raderar en specifik jobberfarenhet |

<br>

#### Ett kurs-objekt returneras/skickas som JSON med följande struktur:

<br>

```json
{
   "companyname": "Frilansare",
   "jobtitle": "Logodesigner",
   "location": "Distans",
   "description": "Skapat logotyper åt privatperson och företag"
}
```