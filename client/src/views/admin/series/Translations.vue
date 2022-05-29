<template>
    <section class="panel">
        <div class="box__double">
            <div class="box">
                <div class="box__header">
                    <svg-icon icon="translation"/> Translate series
                </div>
                <div class="box__content">
                    
                    <p>Translate titles and descriptions for cartoons and fairy tales.</p>
                        <FormKit
                            type="select"
                            label="Series to translate"
                            placeholder="Select a series"
                            name="series-id"
                            :options="{
                                1: 'Ben 10',
                                2: 'SpongeBob SquarePants',
                            }"
                            validation="required"
                            />
                            <FormKit
                            type="select"
                            label="Language into which you want to translate "
                            placeholder="Select a language"
                            name="language"
                            :options="{
                                polish: 'Polish',
                                german: 'German',
                            }"
                            validation="required"
                            />
                </div>
            </div>
            <div class="box">
                <div class="box__header">
                    Your translation
                </div>
                <div class="box__content">
                    <FormKit
                    type="form"
                    :value="{
                        location: 'New York City',
                        duration: '2 weeks',
                        price: 'average'
                    }"
                    submit-label="Submit translation"
                    @submit="save"
                    >
                    <FormKit
                        type="text"
                        label="LANGUAGE title"
                        value="SpongeBob SquarePants"
                        help=""
                        readonly
                        />
                    <FormKit
                        type="textarea"
                        label="LANGUAGE description"
                        value="The series chronicles the adventures and endeavors of the title character and his aquatic friends in the fictional underwater city of Bikini Bottom."
                        help=""
                        />
                    </FormKit>
                </div>
            </div>
        </div>
        <div class="box" style="width: max-content">
            <div class="box__header">
                <svg-icon icon="translation"/> Oryginal
            </div>
            <div class="box__content">
                <FormKit
                    type="text"
                    label="Oryginal title"
                    value="SpongeBob SquarePants"
                    help="English title (original), you can change it in the main options"
                    readonly
                    />
                <FormKit
                    type="textarea"
                    label="Oryginal description"
                    value="The series chronicles the adventures and endeavors of the title character and his aquatic friends in the fictional underwater city of Bikini Bottom."
                    help="English description (original), you can change it in the main options"
                    readonly
                    />

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.box{
    width: max-content;
    border-radius: 1rem;
    font-family: "Poppins", sans-serif;
    margin-top: 1rem;
    width: 100%;
}
.form__wrapper{
    display: flex;
    gap: 2rem;
}
.box__header{
    color: #6A788D;
    padding: 1rem;
    background-color: #EEF1F7;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    font-weight: bold;
}
.box__content{
    padding: 1rem 2.5rem;
    background-color: #FFF;
    color: #222;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
}
.panel{
    display: flex;
    flex-direction: column;
    background-color: #D5DAE6;
    width: 100%;
    padding-bottom: 2rem;
    gap: 3rem;
    min-height: 90vh;
    flex-wrap: wrap;
    align-items: center;
}
.box__double{
    display: flex;
    gap: 2rem;
    padding: 1rem 2rem;
    width: 100%;
}
p{ 
    max-width: 61ch;
    padding: 1rem;
    font-size: 0.9em;
    line-height: 150%;
    color: #333;
    background-color: #eee;
    font-weight: bold;
}
</style>