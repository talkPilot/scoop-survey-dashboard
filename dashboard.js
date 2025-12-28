// נתוני הסקר
const surveyData = [
    {date: "28/12/2025 14:59", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טעון שיפור", invoice_clarity: "טוב מאוד", sales_contact_person: "יוסי עזולאי", contact_person_visited: "כן", visited_park_raam: "כן", attended_seminar: "כן", want_attend_seminar: "לא נשאל", improvement_feedback: "אין", customerName: "צליל מ-חברת סקופ"},
    {date: "28/12/2025 15:10", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "לא", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "עמית", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "לא", want_attend_seminar: "כן", improvement_feedback: "לא", customerName: "מיקי רפפורט ממ.ד.ר עבוד שבבי בע\"מ"},
    {date: "28/12/2025 15:10", phone_response: "טוב מאוד", sales_and_solution: "-", continuous_contact: "טוב מאוד", website_usage: "-", missing_products: "-", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "דבאח אברהים מטובאי תעשיות בע\"מ"},
    {date: "28/12/2025 15:11", phone_response: "טעון שיפור", sales_and_solution: "טוב", continuous_contact: "טוב", website_usage: "טעון שיפור", missing_products: "לא", product_quality: "טוב", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "אנה", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "לא", customerName: "ישראל פייבל מישראמטל בע\"מ"},
    {date: "28/12/2025 15:11", phone_response: "טוב", sales_and_solution: "טעון שיפור", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "כן", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "לא", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "מחיר", customerName: "נוצי ממרק ע.ש. תעשיות ואחזקה בע\"מ"},
    {date: "28/12/2025 15:12", phone_response: "טוב", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "פיצה פפרוני", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "ירדנה", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "גיל מבסט קרטון בע\"מ"},
    {date: "28/12/2025 15:12", phone_response: "טוב", sales_and_solution: "טוב", continuous_contact: "טוב", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "יהודה", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "כן", want_attend_seminar: "לא נשאל", improvement_feedback: "אין", customerName: "טבצניק אלכס מאיירון ליין - טבצ'ניק"},
    {date: "28/12/2025 15:12", phone_response: "טעון שיפור", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טוב מאוד", missing_products: "לא", product_quality: "טוב מאוד", delivery_time: "טוב", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "לילך", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "לא", want_attend_seminar: "כן", improvement_feedback: "לא", customerName: "אילן מגומיאן מוצרי גומי בע\"מ"},
    {date: "28/12/2025 15:12", phone_response: "טוב", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "מילה", contact_person_visited: "לא", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "שמשון רובין ממישלוב בע\"מ"},
    {date: "28/12/2025 15:12", phone_response: "טוב מאוד", sales_and_solution: "-", continuous_contact: "-", website_usage: "-", missing_products: "-", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "גיל ממפ' מתכת כפר מנחם אגש\"ח בע\"מ"},
    {date: "28/12/2025 15:12", phone_response: "טוב מאוד", sales_and_solution: "-", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "-", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "יותם ישראלי ממסגריית יוד יוד בע\"מ"},
    {date: "28/12/2025 15:13", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "יוליה", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "אלכסיי זיפר מתל עד שבב בע\"מ"},
    {date: "28/12/2025 15:13", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טוב מאוד", missing_products: "נחושת, ברונזה, מגוון רחב יותר של פיץ", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "אירנה", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "לא", want_attend_seminar: "לא", improvement_feedback: "לא", customerName: "רוני ישראל מרדיאן טכנולוגיות בע\"מ"},
    {date: "28/12/2025 15:14", phone_response: "טוב מאוד", sales_and_solution: "-", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "הכל בסדר", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "לא נשאל", want_attend_seminar: "-", improvement_feedback: "לא, הכל בסדר.", customerName: "נפתלי שוורץ ממטל א.מ.ל בע\"מ"},
    {date: "28/12/2025 15:14", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "נורית", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "אייל רבונה מא. רבונה ציוד רפואי בע\"מ"},
    {date: "28/12/2025 15:14", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "ברנה, אהרון, יוסי", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "ריאד מחמאיסה ריאד"},
    {date: "28/12/2025 15:14", phone_response: "טוב", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טוב מאוד", missing_products: "יש לפעמים שיש חוסרים ב במוצרים שאני זקוק להם באופן דחוף ויש צורך להמתין חודשים עד שהמלאי יתחדש. זה מעכב את הייצור ומעכב אותי בקבלת הזמנות.", product_quality: "טוב מאוד", delivery_time: "טוב מאוד מצוין", driver_politeness: "טוב", invoice_clarity: "טוב מאוד", sales_contact_person: "חיה יעקב מויאל", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "כן", want_attend_seminar: "לא נשאל", improvement_feedback: "גמישות בנושא המחירים. כדי לקבל עבודות מסוימות, אני צריך לרדת במחירים ואני מבקש לפעמים שילכו לקראתי על מנת שאוכל להגיע לקבל את הפרויקט.", customerName: "עמיר אברהמי ממפעלי מתכת יורן בע\"מ"},
    {date: "28/12/2025 15:14", phone_response: "טוב מאוד", sales_and_solution: "טוב", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב", invoice_clarity: "טוב מאוד", sales_contact_person: "סוזי", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "אהרון שמואל מחברת נמל אילת בע\"מ"},
    {date: "28/12/2025 15:15", phone_response: "טוב", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "-", driver_politeness: "טוב מאוד", invoice_clarity: "טוב", sales_contact_person: "טליה או נטליה.", contact_person_visited: "כן", visited_park_raam: "לא נשאל", attended_seminar: "כן", want_attend_seminar: "לא נשאל", improvement_feedback: "אין", customerName: "סירגיי מבי\"ח הדסה עין כרם מלכ\"ר"},
    {date: "28/12/2025 15:15", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "כן", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "רונן מאמ.די.טי טכנולוג' מוצרי יהלום בע\"מ"},
    {date: "28/12/2025 15:15", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "אין", product_quality: "טוב", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "אליאדה", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "אין", customerName: "אבי מא.ש מיתדים בע\"מ"},
    {date: "28/12/2025 15:17", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טעון שיפור", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "שי", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "לא", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "חזי נחמנוביץ' מנ.צ. עיבוד שבבי בע\"מ"},
    {date: "28/12/2025 16:08", phone_response: "טוב מאוד", sales_and_solution: "טוב", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "-", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "ליאור אטיאס מאתגר - מכשירים רפואיים בע\"מ"},
    {date: "28/12/2025 16:08", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "-", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "אחמד מטי.בי.לוק TBLOCK"},
    {date: "28/12/2025 16:10", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "זהבית היקרה", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "ברהום איציק מברהום נירוסטה בע\"מ"},
    {date: "28/12/2025 16:10", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "לא", product_quality: "טוב מאוד", delivery_time: "טוב", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "גבריאל", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "לא, השירות מצוין, אני מרוצה מאוד.", customerName: "מצי לוי משיפ-רם טכנולוגיות מתקדמות בע\"מ"},
    {date: "28/12/2025 16:10", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "חומרים 1020 בתחום הפח ובתחום ברזל עגול.", product_quality: "טוב מאוד.", delivery_time: "טוב מאוד.", driver_politeness: "טוב מאוד.", invoice_clarity: "טוב מאוד.", sales_contact_person: "יוסי פלד.", contact_person_visited: "כן.", visited_park_raam: "לא.", attended_seminar: "לא נשאל", want_attend_seminar: "כן.", improvement_feedback: "שתשמרו את הקיים.", customerName: "זאב מטכנו קוד בע\"מ"},
    {date: "28/12/2025 16:10", phone_response: "טעון שיפור", sales_and_solution: "טוב", continuous_contact: "טוב", website_usage: "לא משתמש בו", missing_products: "לא", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "אהרון וישראל", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "לא", customerName: "חיים לוי מקשת ציודים - יעקב לוי"},
    {date: "28/12/2025 16:10", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "אין", product_quality: "טוב", delivery_time: "טוב", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "יוליה", contact_person_visited: "לא", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "אלי אלפסי (בית מלאכה) מסי אי סיסטמס (ישראל) בע\"מ"},
    {date: "28/12/2025 16:11", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "-", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "פוזי", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "אין", customerName: "יצחק אקבלי משפיר מערכות ייצור בע\"מ"},
    {date: "28/12/2025 16:12", phone_response: "טוב", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טוב", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "סיוון", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "כן", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "דימה מסודהסטרים תעשיות בע\"מ (סודה קלאב)"},
    {date: "28/12/2025 16:12", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "מרינה ושיי", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "לפעמים אתם קצת יקרים יותר בדברים מסוימים.", customerName: "הדר שרון מכרמל בידוד בע\"מ"},
    {date: "28/12/2025 16:12", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טעון שיפור", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "נתי", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "אין", customerName: "פיני מבי\"ח הדסה עין כרם מלכ\"ר"},
    {date: "28/12/2025 16:12", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "-", missing_products: "כן", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "לאה", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא נשאל", improvement_feedback: "אין", customerName: "שרון ממשרד הבטחון - ד.צ מטווח 24"},
    {date: "28/12/2025 16:13", phone_response: "טוב", sales_and_solution: "טוב", continuous_contact: "טוב", website_usage: "לא נכנסתי אליו", missing_products: "לא", product_quality: "טוב", delivery_time: "טוב", driver_politeness: "טוב", invoice_clarity: "טוב", sales_contact_person: "שירלי", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא צריך", improvement_feedback: "לא", customerName: "אודי מנור אש ציוד כיבוי ובטיחות אש בע\"מ"},
    {date: "28/12/2025 16:13", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "לא", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "שירלי", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "לא", customerName: "מיכי אמיתי מאבשלום מפעלים איזוריים אגש\"ח בע\"מ"},
    {date: "28/12/2025 16:13", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב", website_usage: "טוב", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "קובי", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "כן, לא יזיק להוריד קצת מחירים.", customerName: "-"},
    {date: "28/12/2025 16:14", phone_response: "טוב", sales_and_solution: "טוב", continuous_contact: "טוב מאוד", website_usage: "טעון שיפור", missing_products: "לא יודע.", product_quality: "טעון שיפור", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "סיון.", contact_person_visited: "לא.", visited_park_raam: "לא.", attended_seminar: "לא נשאל", want_attend_seminar: "כן.", improvement_feedback: "אני ראיתי רוצה אני ראיתי רוצה כמו כמו שנגיד אני קונה בצ'ין. נכנס למחשב ובוחר. מה מה שאני צריך ממה שיש.", customerName: "יורי מסהר עיבוד שבבי בע\"מ"},
    {date: "28/12/2025 16:36", phone_response: "טוב", sales_and_solution: "טעון שיפור", continuous_contact: "-", website_usage: "-", missing_products: "-", product_quality: "-", delivery_time: "-", driver_politeness: "-", invoice_clarity: "-", sales_contact_person: "-", contact_person_visited: "-", visited_park_raam: "-", attended_seminar: "-", want_attend_seminar: "-", improvement_feedback: "-", customerName: "איאד סנעאללה ממתכת סנעאללה בע\"מ"},
    {date: "28/12/2025 16:39", phone_response: "טוב", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב", sales_contact_person: "רוני גדול", contact_person_visited: "לא", visited_park_raam: "כן", attended_seminar: "כן", want_attend_seminar: "לא נשאל", improvement_feedback: "אין", customerName: "אורן יוגב מרותם מים וסביבה בע\"מ"},
    {date: "28/12/2025 16:39", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "-", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "טוב מאוד", sales_contact_person: "סיוון", contact_person_visited: "לא", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "אין", customerName: "רות מלוגו מיכון וחדשנות בע\"מ"},
    {date: "28/12/2025 16:39", phone_response: "טעון שיפור", sales_and_solution: "טעון שיפור", continuous_contact: "טוב מאוד", website_usage: "-", missing_products: "לא יודע", product_quality: "טוב מאוד", delivery_time: "טוב", driver_politeness: "טוב", invoice_clarity: "טוב מאוד", sales_contact_person: "סיגל", contact_person_visited: "כן", visited_park_raam: "לא נשאל", attended_seminar: "לא נשאל", want_attend_seminar: "לא", improvement_feedback: "את המחירים", customerName: "הרצל מסיקה ממתכת אשקלון יצור מערכות שינוע בע\"מ"},
    {date: "28/12/2025 16:39", phone_response: "טוב מאוד", sales_and_solution: "טוב מאוד", continuous_contact: "טוב מאוד", website_usage: "טוב מאוד", missing_products: "אין", product_quality: "טוב מאוד", delivery_time: "טוב מאוד", driver_politeness: "טוב מאוד", invoice_clarity: "-", sales_contact_person: "ארז", contact_person_visited: "כן", visited_park_raam: "לא", attended_seminar: "לא נשאל", want_attend_seminar: "כן", improvement_feedback: "רוצה שתשפרו את המחירים.", customerName: "אמיר משלב מא.מ.ח.ז מהנדסים בע\"מ"}
];

// הגדרות צבעים
const colors = {
    excellent: '#10b981',
    good: '#3b82f6',
    needsImprovement: '#f59e0b',
    yes: '#10b981',
    no: '#ef4444',
    notAsked: '#94a3b8',
    gradient: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
};

// פונקציה לספירת תשובות
function countResponses(field) {
    const counts = {
        'טוב מאוד': 0,
        'טוב': 0,
        'טעון שיפור': 0
    };

    surveyData.forEach(entry => {
        const value = entry[field];
        if (value === 'טוב מאוד' || value === 'טוב מאוד מצוין' || value === 'טוב מאוד.') {
            counts['טוב מאוד']++;
        } else if (value === 'טוב') {
            counts['טוב']++;
        } else if (value === 'טעון שיפור') {
            counts['טעון שיפור']++;
        }
    });

    return counts;
}

// פונקציה ליצירת תרשים דונאט משופר
function createDoughnutChart(canvasId, field) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const data = countResponses(field);

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['טוב מאוד', 'טוב', 'טעון שיפור'],
            datasets: [{
                data: [data['טוב מאוד'], data['טוב'], data['טעון שיפור']],
                backgroundColor: [colors.excellent, colors.good, colors.needsImprovement],
                borderWidth: 3,
                borderColor: '#fff',
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true,
                    labels: {
                        font: { size: 13, weight: '600' },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    rtl: true,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// שאלות 1-9: יצירת כל תרשימי השירות
createDoughnutChart('phoneResponseChart', 'phone_response');
createDoughnutChart('salesChart', 'sales_and_solution');
createDoughnutChart('contactChart', 'continuous_contact');
createDoughnutChart('websiteChart', 'website_usage');
createDoughnutChart('qualityChart', 'product_quality');
createDoughnutChart('deliveryChart', 'delivery_time');
createDoughnutChart('driverChart', 'driver_politeness');
createDoughnutChart('invoiceChart', 'invoice_clarity');

// שאלה 5: תרשים מוצרים חסרים
const missingCtx = document.getElementById('missingProductsChart').getContext('2d');
const missingCounts = {
    yes: surveyData.filter(d => {
        const val = d.missing_products;
        return val && val !== '-' && val !== 'אין' && val !== 'לא' && val !== 'לא יודע' && val !== 'לא יודע.' && val !== 'הכל בסדר' && val.length > 3;
    }).length,
    no: surveyData.filter(d => d.missing_products === 'אין' || d.missing_products === 'לא' || d.missing_products === 'לא יודע').length
};

new Chart(missingCtx, {
    type: 'pie',
    data: {
        labels: ['יש מוצרים חסרים', 'אין מוצרים חסרים'],
        datasets: [{
            data: [missingCounts.yes, missingCounts.no],
            backgroundColor: [colors.needsImprovement, colors.excellent],
            borderWidth: 3,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', rtl: true, labels: { font: { size: 13, weight: '600' }, padding: 15 } }
        }
    }
});

// תרשים השוואה כללי
const ctx = document.getElementById('overallChart').getContext('2d');
const categories = [
    {name: 'מענה טלפוני', field: 'phone_response'},
    {name: 'מכירות ופתרונות', field: 'sales_and_solution'},
    {name: 'קשר רציף', field: 'continuous_contact'},
    {name: 'שימוש באתר', field: 'website_usage'},
    {name: 'איכות מוצר', field: 'product_quality'},
    {name: 'זמן אספקה', field: 'delivery_time'},
    {name: 'נימוס נהגים', field: 'driver_politeness'},
    {name: 'בהירות חשבוניות', field: 'invoice_clarity'}
];

const overallData = {
    labels: categories.map(c => c.name),
    datasets: [
        {
            label: 'טוב מאוד',
            data: categories.map(c => countResponses(c.field)['טוב מאוד']),
            backgroundColor: colors.excellent
        },
        {
            label: 'טוב',
            data: categories.map(c => countResponses(c.field)['טוב']),
            backgroundColor: colors.good
        },
        {
            label: 'טעון שיפור',
            data: categories.map(c => countResponses(c.field)['טעון שיפור']),
            backgroundColor: colors.needsImprovement
        }
    ]
};

new Chart(ctx, {
    type: 'bar',
    data: overallData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
                rtl: true
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});

// שאלה 10: האם איש קשר ביקר אצלך?
const visitedCtx = document.getElementById('visitedChart').getContext('2d');
const visitedCounts = {
    yes: surveyData.filter(d => d.contact_person_visited === 'כן' || d.contact_person_visited === 'כן.').length,
    no: surveyData.filter(d => d.contact_person_visited === 'לא' || d.contact_person_visited === 'לא.').length
};

new Chart(visitedCtx, {
    type: 'pie',
    data: {
        labels: ['כן - ביקר', 'לא - לא ביקר'],
        datasets: [{
            data: [visitedCounts.yes, visitedCounts.no],
            backgroundColor: [colors.yes, colors.no],
            borderWidth: 3,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', rtl: true, labels: { font: { size: 13, weight: '600' }, padding: 15 } }
        }
    }
});

// שאלה 11: האם ביקרת בפארק רעם?
const parkCtx = document.getElementById('parkChart').getContext('2d');
const parkCounts = {
    yes: surveyData.filter(d => d.visited_park_raam === 'כן').length,
    no: surveyData.filter(d => d.visited_park_raam === 'לא' || d.visited_park_raam === 'לא.').length,
    notAsked: surveyData.filter(d => d.visited_park_raam === 'לא נשאל' || d.visited_park_raam === '-').length
};

new Chart(parkCtx, {
    type: 'doughnut',
    data: {
        labels: ['כן - ביקר', 'לא - לא ביקר', 'לא נשאל'],
        datasets: [{
            data: [parkCounts.yes, parkCounts.no, parkCounts.notAsked],
            backgroundColor: [colors.yes, colors.no, colors.notAsked],
            borderWidth: 3,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', rtl: true, labels: { font: { size: 13, weight: '600' }, padding: 15 } }
        }
    }
});

// שאלה 12: השתתפות בסמינר
const seminarAttendedCtx = document.getElementById('seminarAttendedChart').getContext('2d');
const seminarAttendedCounts = {
    yes: surveyData.filter(d => d.attended_seminar === 'כן').length,
    no: surveyData.filter(d => d.attended_seminar === 'לא').length,
    notAsked: surveyData.filter(d => d.attended_seminar === 'לא נשאל' || d.attended_seminar === '-').length
};

new Chart(seminarAttendedCtx, {
    type: 'pie',
    data: {
        labels: ['כן - השתתף', 'לא - לא השתתף', 'לא נשאל'],
        datasets: [{
            data: [seminarAttendedCounts.yes, seminarAttendedCounts.no, seminarAttendedCounts.notAsked],
            backgroundColor: [colors.yes, colors.no, colors.notAsked],
            borderWidth: 3,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', rtl: true, labels: { font: { size: 13, weight: '600' }, padding: 15 } }
        }
    }
});

// שאלה 13: עניין בסמינרים עתידיים
const seminarInterestCtx = document.getElementById('seminarInterestChart').getContext('2d');
const seminarInterestCounts = {
    yes: surveyData.filter(d => d.want_attend_seminar === 'כן' || d.want_attend_seminar === 'כן.').length,
    no: surveyData.filter(d => d.want_attend_seminar === 'לא' || d.want_attend_seminar === 'לא צריך').length,
    notAsked: surveyData.filter(d => d.want_attend_seminar === 'לא נשאל' || d.want_attend_seminar === '-').length
};

new Chart(seminarInterestCtx, {
    type: 'doughnut',
    data: {
        labels: ['מעוניין', 'לא מעוניין', 'לא נשאל'],
        datasets: [{
            data: [seminarInterestCounts.yes, seminarInterestCounts.no, seminarInterestCounts.notAsked],
            backgroundColor: [colors.yes, colors.no, colors.notAsked],
            borderWidth: 3,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', rtl: true, labels: { font: { size: 13, weight: '600' }, padding: 15 } }
        }
    }
});

// תרשים סיכום אירועים
const eventsCtx = document.getElementById('eventsChart').getContext('2d');
new Chart(eventsCtx, {
    type: 'bar',
    data: {
        labels: ['איש קשר ביקר', 'ביקור בפארק רעם', 'השתתפות בסמינר', 'מעוניין בסמינרים'],
        datasets: [{
            label: 'כן',
            data: [visitedCounts.yes, parkCounts.yes, seminarAttendedCounts.yes, seminarInterestCounts.yes],
            backgroundColor: colors.yes
        }, {
            label: 'לא',
            data: [visitedCounts.no, parkCounts.no, seminarAttendedCounts.no, seminarInterestCounts.no],
            backgroundColor: colors.no
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top', rtl: true, labels: { font: { size: 14, weight: '600' } } }
        }
    }
});

// שאלה 14: אנשי קשר במכירות
const contactPersonsGrid = document.getElementById('contactPersonsGrid');
const contactPersons = {};

surveyData.forEach(entry => {
    const person = entry.sales_contact_person;
    if (person && person !== '-') {
        const persons = person.split(/[,،\/]/);
        persons.forEach(p => {
            const trimmed = p.trim();
            if (trimmed.length > 1) {
                contactPersons[trimmed] = (contactPersons[trimmed] || 0) + 1;
            }
        });
    }
});

const sortedPersons = Object.entries(contactPersons).sort((a, b) => b[1] - a[1]);
sortedPersons.forEach(([name, count]) => {
    const badge = document.createElement('div');
    badge.className = 'contact-person-badge';
    badge.textContent = `${name} (${count})`;
    contactPersonsGrid.appendChild(badge);
});

// מילוי טבלת סיכום
const summaryTable = document.getElementById('summaryTable');
categories.forEach(category => {
    const data = countResponses(category.field);
    const total = data['טוב מאוד'] + data['טוב'] + data['טעון שיפור'];
    const avgScore = ((data['טוב מאוד'] * 3 + data['טוב'] * 2 + data['טעון שיפור'] * 1) / total).toFixed(2);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td><strong>${category.name}</strong></td>
        <td class="rating-excellent">${data['טוב מאוד']}</td>
        <td class="rating-good">${data['טוב']}</td>
        <td class="rating-needs-improvement">${data['טעון שיפור']}</td>
        <td>${total}</td>
        <td><strong>${avgScore}</strong></td>
    `;
    summaryTable.appendChild(row);
});

// שאלה 15 חלק א': מילוי טבלת מוצרים חסרים
const missingProductsTable = document.getElementById('missingProductsTable');
let missingIndex = 1;
surveyData.forEach(entry => {
    const products = entry.missing_products;
    if (products && products !== '-' && products !== 'אין' && products !== 'לא' && products !== 'לא יודע' && products !== 'לא יודע.' && products !== 'הכל בסדר' && products !== 'כן' && products.length > 3) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${missingIndex++}</strong></td>
            <td><strong>${entry.customerName}</strong></td>
            <td>${products}</td>
        `;
        missingProductsTable.appendChild(row);
    }
});

// שאלה 15 חלק ב': מילוי טבלת הצעות לשיפור
const improvementTable = document.getElementById('improvementTable');
let improvementIndex = 1;
surveyData.forEach(entry => {
    const feedback = entry.improvement_feedback;
    if (feedback && feedback !== '-' && feedback !== 'אין' && feedback !== 'לא' && feedback !== 'לא, הכל בסדר.' && feedback !== 'לא, השירות מצוין, אני מרוצה מאוד.' && feedback.length > 5) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${improvementIndex++}</strong></td>
            <td><strong>${entry.customerName}</strong></td>
            <td>${feedback}</td>
        `;
        improvementTable.appendChild(row);
    }
});
