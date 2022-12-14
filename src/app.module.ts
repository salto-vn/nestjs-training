import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ScheduleModule} from '@nestjs/schedule';
import {PostsModule} from './modules';
import {ConfigModule} from '@nestjs/config';
import configuration from './config/configuration';
import {UsersModule} from './modules/users/users.module';

@Module({
  imports: [
    // configuration
    ConfigModule.forRoot({
      load: [configuration],
    }),

    // response
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),

    // cronjob
    ScheduleModule.forRoot(),

    // features
    PostsModule,
    UsersModule,
  ],
})
export class AppModule { }
