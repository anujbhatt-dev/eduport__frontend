import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"
import {Helmet} from "react-helmet"

 class AdminBlogs extends Component{

   state={
     data:[
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"anuj Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ratione.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
       {
         by:"Anuj BhAtt",
         date:"12-12-2020",
         title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },
     ]
   }

   // postCaller=(id,data)=>{
   //    // this.props.history.push({
   //    //   pathname:"/blogs:"+id,
   //    //   state:{
   //    //      ...data
   //    // }})
   //    this.props.history.push("/")
   // }

   componentDidMount=()=>{
     window.scrollTo({top:0,behavior:"smooth"})
   }

   render(){

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Blogs"}</title>
              <link rel="canonical" href={"http://localhost:3000/blogs"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
           <div className="blogs">
                 {this.state.data.map((data,i)=>{
                   return <div className="blogs__item">
                               <div className="blogs__item-title">{data.title}</div>
                               <div className="blogs__item-info">By <span className="blogs__item-info-by">{data.by}</span> on <span className="blogs__item-info-date">{data.date}</span></div>
                               <div  className="blogs__item-content">{data.content.slice(0,350)} </div>                               <Link to={{pathname:"/admin/blogs:"+data.title,state:{...data}}} className="blogs__item-readMore">...Read More</Link>
                          </div>
                 })}
           </div>
           </>
     )
   }
 }


export default withRouter(AdminBlogs);