// Когда запустимся будем брать с базы данных

import { sectionsTitles } from "@/pages/landing/utils/sectionsTitles";
import { LandingSectionTitle } from "./LandingSectionTitle";
import { Review } from "./Review";

const reviews = [
    {
        imgURL: "https://gitverse.ru/home/_next/static/media/fbphoto1.e54a37f9.jpg",
        name: "Дмитрий Коровин",
        jobTitle: "Independened expert",
        review: "Как разработчику, мне очень нравится GitVerse! Платформа стала незаменимым инструментом в работе над личными проектами. Нравится работать со встроенным AI-ассистентом — ревью, автодополнение кода и советы по оптимизации помогают не тратить время на рутину и повышают качество кода. Я спокойно управляю версиями, тестирую код и развертываю приложения. Платформа интуитивно понятна, и это делает ее отличным выбором для работы."
    },
    {
        imgURL: "https://gitverse.ru/home/_next/static/media/fbphoto1.e54a37f9.jpg",
        name: "Дмитрий Коровин",
        jobTitle: "Independened expert",
        review: "Как разработчику, мне очень нравится GitVerse! Платформа стала незаменимым инструментом в работе над личными проектами. Нравится работать со встроенным AI-ассистентом — ревью, автодополнение кода и советы по оптимизации помогают не тратить время на рутину и повышают качество кода. Я спокойно управляю версиями, тестирую код и развертываю приложения. Платформа интуитивно понятна, и это делает ее отличным выбором для работы."
    },
    {
        imgURL: "https://gitverse.ru/home/_next/static/media/fbphoto1.e54a37f9.jpg",
        name: "Дмитрий Коровин",
        jobTitle: "Independened expert",
        review: "Как разработчику, мне очень нравится GitVerse! Платформа стала незаменимым инструментом в работе над личными проектами. Нравится работать со встроенным AI-ассистентом — ревью, автодополнение кода и советы по оптимизации помогают не тратить время на рутину и повышают качество кода. Я спокойно управляю версиями, тестирую код и развертываю приложения. Платформа интуитивно понятна, и это делает ее отличным выбором для работы."
    },
]

export const Reviews = () => {
    const currentSectionTitle = sectionsTitles["reviews"];
    
    return (
        <section>
            <LandingSectionTitle 
                suptitle={currentSectionTitle.suptitle}
                title={currentSectionTitle.title}
                subtitle={currentSectionTitle.subtitle}
            />

            <div className="flex gap-x-[20px] justify-center mt-[30px]">
                {
                    Array.isArray(reviews) && reviews.map((reviewItem, itemIndex) => (
                        <Review 
                            key={itemIndex}
                            imgURL={reviewItem.imgURL}
                            name={reviewItem.name}
                            jobTitle={reviewItem.jobTitle}
                            review={reviewItem.review}
                        />
                    ))
                }
            </div>
        </section>
    );
}