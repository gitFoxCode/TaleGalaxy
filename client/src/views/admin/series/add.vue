<template>
    <section class="panel">
        <div class="box">
            <div class="box__header">
                <svg-icon icon="plus"/> Add new series
            </div>
            <div class="box__content">
                <FormKit
                type="form"
                :value="{
                    location: 'New York City',
                    duration: '2 weeks',
                    price: 'average'
                }"
                submit-label="Save"
                @submit="save"
                >
                <p>Add a new cartoon or cartoon series. Once added, you must run it in the main /series panel (to have time to fix bugs and add episodes) </p>
                <div class="form__wrapper">
                <div class="form__column">
                
                    <FormKit
                        type="text"
                        name="title"
                        label="Title"
                        help="The exact English name of the series"
                        validation="required"
                        validation-visibility="live"
                        placeholder="Adventures of galaxy..."
                    />
                    <FormKit
                        type="textarea"
                        name="description"
                        label="Description"
                        help="Series description"
                        validation="required"
                        placeholder="The adventures of a hero traversing the galaxy..."
                    />
                    <FormKit
                        type="text"
                        name="station"
                        label="Station"
                        help="The station on which the cartoon was broadcast"
                        validation="required"
                        placeholder="Cartoon Network"
                    />
                    <FormKit
                        type="text"
                        name="src"
                        label="SRC link"
                        help="link where the series will be available "
                        validation="required"
                        placeholder="awesome-cartoon"
                    />
                </div>
                <div class="form__column">
                <FormKit
                    type="file"
                    label="Thumbnail"
                    accept=".png,.jpeg"
                    help="Thumbnail for the series (png/jpeg/webm)"
                    />
                <FormKit
                    type="checkbox"
                    name="dubbing"
                    label="Dubbing"
                    help="What dubbing is available?"
                    :options="[
                    {value: 'eng', label: 'English',  attrs: { selected: true } },
                    {value: 'pl', label: 'Polish'},
                    {value: 'ger', label: 'Germany'},
                    ]"
                />
                <FormKit
                    type="number"
                    help="What age of viewer is the series intended for?"
                    label="pegi"
                    name="Pegi"
                    value="7"
                    step="1"
                    />
                    </div></div>
               </FormKit> 
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
    padding: 1rem;
    background-color: #FFF;
    color: #222;
}
.panel{
    display: flex;
    justify-content: center;
    background-color: #D5DAE6;
    width: 100%;
    padding-bottom: 2rem;
}
p{ 
    max-width: 61ch;
    padding: 1rem 0;
    font-size: 0.9em;
    line-height: 150%;
    color: #333;
    text-align: center;
}
</style>