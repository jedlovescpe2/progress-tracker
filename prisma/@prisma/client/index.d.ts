
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProgressItem
 * 
 */
export type ProgressItem = $Result.DefaultSelection<Prisma.$ProgressItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProgressItems
 * const progressItems = await prisma.progressItem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ProgressItems
   * const progressItems = await prisma.progressItem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.progressItem`: Exposes CRUD operations for the **ProgressItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressItems
    * const progressItems = await prisma.progressItem.findMany()
    * ```
    */
  get progressItem(): Prisma.ProgressItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ProgressItem: 'ProgressItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "progressItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProgressItem: {
        payload: Prisma.$ProgressItemPayload<ExtArgs>
        fields: Prisma.ProgressItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>
          }
          findFirst: {
            args: Prisma.ProgressItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>
          }
          findMany: {
            args: Prisma.ProgressItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>[]
          }
          create: {
            args: Prisma.ProgressItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>
          }
          createMany: {
            args: Prisma.ProgressItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>[]
          }
          delete: {
            args: Prisma.ProgressItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>
          }
          update: {
            args: Prisma.ProgressItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>
          }
          deleteMany: {
            args: Prisma.ProgressItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>[]
          }
          upsert: {
            args: Prisma.ProgressItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressItemPayload>
          }
          aggregate: {
            args: Prisma.ProgressItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressItem>
          }
          groupBy: {
            args: Prisma.ProgressItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    progressItem?: ProgressItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ProgressItem
   */

  export type AggregateProgressItem = {
    _count: ProgressItemCountAggregateOutputType | null
    _avg: ProgressItemAvgAggregateOutputType | null
    _sum: ProgressItemSumAggregateOutputType | null
    _min: ProgressItemMinAggregateOutputType | null
    _max: ProgressItemMaxAggregateOutputType | null
  }

  export type ProgressItemAvgAggregateOutputType = {
    startingPage: number | null
    currentPage: number | null
    targetPage: number | null
    position: number | null
  }

  export type ProgressItemSumAggregateOutputType = {
    startingPage: number | null
    currentPage: number | null
    targetPage: number | null
    position: number | null
  }

  export type ProgressItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    startingPage: number | null
    currentPage: number | null
    targetPage: number | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startingPage: number | null
    currentPage: number | null
    targetPage: number | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressItemCountAggregateOutputType = {
    id: number
    name: number
    startingPage: number
    currentPage: number
    targetPage: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgressItemAvgAggregateInputType = {
    startingPage?: true
    currentPage?: true
    targetPage?: true
    position?: true
  }

  export type ProgressItemSumAggregateInputType = {
    startingPage?: true
    currentPage?: true
    targetPage?: true
    position?: true
  }

  export type ProgressItemMinAggregateInputType = {
    id?: true
    name?: true
    startingPage?: true
    currentPage?: true
    targetPage?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgressItemMaxAggregateInputType = {
    id?: true
    name?: true
    startingPage?: true
    currentPage?: true
    targetPage?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgressItemCountAggregateInputType = {
    id?: true
    name?: true
    startingPage?: true
    currentPage?: true
    targetPage?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgressItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressItem to aggregate.
     */
    where?: ProgressItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressItems to fetch.
     */
    orderBy?: ProgressItemOrderByWithRelationInput | ProgressItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressItems
    **/
    _count?: true | ProgressItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressItemMaxAggregateInputType
  }

  export type GetProgressItemAggregateType<T extends ProgressItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressItem[P]>
      : GetScalarType<T[P], AggregateProgressItem[P]>
  }




  export type ProgressItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressItemWhereInput
    orderBy?: ProgressItemOrderByWithAggregationInput | ProgressItemOrderByWithAggregationInput[]
    by: ProgressItemScalarFieldEnum[] | ProgressItemScalarFieldEnum
    having?: ProgressItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressItemCountAggregateInputType | true
    _avg?: ProgressItemAvgAggregateInputType
    _sum?: ProgressItemSumAggregateInputType
    _min?: ProgressItemMinAggregateInputType
    _max?: ProgressItemMaxAggregateInputType
  }

  export type ProgressItemGroupByOutputType = {
    id: string
    name: string
    startingPage: number
    currentPage: number
    targetPage: number
    position: number
    createdAt: Date
    updatedAt: Date
    _count: ProgressItemCountAggregateOutputType | null
    _avg: ProgressItemAvgAggregateOutputType | null
    _sum: ProgressItemSumAggregateOutputType | null
    _min: ProgressItemMinAggregateOutputType | null
    _max: ProgressItemMaxAggregateOutputType | null
  }

  type GetProgressItemGroupByPayload<T extends ProgressItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressItemGroupByOutputType[P]>
        }
      >
    >


  export type ProgressItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startingPage?: boolean
    currentPage?: boolean
    targetPage?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["progressItem"]>

  export type ProgressItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startingPage?: boolean
    currentPage?: boolean
    targetPage?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["progressItem"]>

  export type ProgressItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startingPage?: boolean
    currentPage?: boolean
    targetPage?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["progressItem"]>

  export type ProgressItemSelectScalar = {
    id?: boolean
    name?: boolean
    startingPage?: boolean
    currentPage?: boolean
    targetPage?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgressItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startingPage" | "currentPage" | "targetPage" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["progressItem"]>

  export type $ProgressItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startingPage: number
      currentPage: number
      targetPage: number
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["progressItem"]>
    composites: {}
  }

  type ProgressItemGetPayload<S extends boolean | null | undefined | ProgressItemDefaultArgs> = $Result.GetResult<Prisma.$ProgressItemPayload, S>

  type ProgressItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressItemCountAggregateInputType | true
    }

  export interface ProgressItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressItem'], meta: { name: 'ProgressItem' } }
    /**
     * Find zero or one ProgressItem that matches the filter.
     * @param {ProgressItemFindUniqueArgs} args - Arguments to find a ProgressItem
     * @example
     * // Get one ProgressItem
     * const progressItem = await prisma.progressItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressItemFindUniqueArgs>(args: SelectSubset<T, ProgressItemFindUniqueArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressItemFindUniqueOrThrowArgs} args - Arguments to find a ProgressItem
     * @example
     * // Get one ProgressItem
     * const progressItem = await prisma.progressItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemFindFirstArgs} args - Arguments to find a ProgressItem
     * @example
     * // Get one ProgressItem
     * const progressItem = await prisma.progressItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressItemFindFirstArgs>(args?: SelectSubset<T, ProgressItemFindFirstArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemFindFirstOrThrowArgs} args - Arguments to find a ProgressItem
     * @example
     * // Get one ProgressItem
     * const progressItem = await prisma.progressItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressItems
     * const progressItems = await prisma.progressItem.findMany()
     * 
     * // Get first 10 ProgressItems
     * const progressItems = await prisma.progressItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressItemWithIdOnly = await prisma.progressItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressItemFindManyArgs>(args?: SelectSubset<T, ProgressItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressItem.
     * @param {ProgressItemCreateArgs} args - Arguments to create a ProgressItem.
     * @example
     * // Create one ProgressItem
     * const ProgressItem = await prisma.progressItem.create({
     *   data: {
     *     // ... data to create a ProgressItem
     *   }
     * })
     * 
     */
    create<T extends ProgressItemCreateArgs>(args: SelectSubset<T, ProgressItemCreateArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressItems.
     * @param {ProgressItemCreateManyArgs} args - Arguments to create many ProgressItems.
     * @example
     * // Create many ProgressItems
     * const progressItem = await prisma.progressItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressItemCreateManyArgs>(args?: SelectSubset<T, ProgressItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressItems and returns the data saved in the database.
     * @param {ProgressItemCreateManyAndReturnArgs} args - Arguments to create many ProgressItems.
     * @example
     * // Create many ProgressItems
     * const progressItem = await prisma.progressItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressItems and only return the `id`
     * const progressItemWithIdOnly = await prisma.progressItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressItem.
     * @param {ProgressItemDeleteArgs} args - Arguments to delete one ProgressItem.
     * @example
     * // Delete one ProgressItem
     * const ProgressItem = await prisma.progressItem.delete({
     *   where: {
     *     // ... filter to delete one ProgressItem
     *   }
     * })
     * 
     */
    delete<T extends ProgressItemDeleteArgs>(args: SelectSubset<T, ProgressItemDeleteArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressItem.
     * @param {ProgressItemUpdateArgs} args - Arguments to update one ProgressItem.
     * @example
     * // Update one ProgressItem
     * const progressItem = await prisma.progressItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressItemUpdateArgs>(args: SelectSubset<T, ProgressItemUpdateArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressItems.
     * @param {ProgressItemDeleteManyArgs} args - Arguments to filter ProgressItems to delete.
     * @example
     * // Delete a few ProgressItems
     * const { count } = await prisma.progressItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressItemDeleteManyArgs>(args?: SelectSubset<T, ProgressItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressItems
     * const progressItem = await prisma.progressItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressItemUpdateManyArgs>(args: SelectSubset<T, ProgressItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressItems and returns the data updated in the database.
     * @param {ProgressItemUpdateManyAndReturnArgs} args - Arguments to update many ProgressItems.
     * @example
     * // Update many ProgressItems
     * const progressItem = await prisma.progressItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressItems and only return the `id`
     * const progressItemWithIdOnly = await prisma.progressItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressItem.
     * @param {ProgressItemUpsertArgs} args - Arguments to update or create a ProgressItem.
     * @example
     * // Update or create a ProgressItem
     * const progressItem = await prisma.progressItem.upsert({
     *   create: {
     *     // ... data to create a ProgressItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressItem we want to update
     *   }
     * })
     */
    upsert<T extends ProgressItemUpsertArgs>(args: SelectSubset<T, ProgressItemUpsertArgs<ExtArgs>>): Prisma__ProgressItemClient<$Result.GetResult<Prisma.$ProgressItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemCountArgs} args - Arguments to filter ProgressItems to count.
     * @example
     * // Count the number of ProgressItems
     * const count = await prisma.progressItem.count({
     *   where: {
     *     // ... the filter for the ProgressItems we want to count
     *   }
     * })
    **/
    count<T extends ProgressItemCountArgs>(
      args?: Subset<T, ProgressItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressItemAggregateArgs>(args: Subset<T, ProgressItemAggregateArgs>): Prisma.PrismaPromise<GetProgressItemAggregateType<T>>

    /**
     * Group by ProgressItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgressItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressItemGroupByArgs['orderBy'] }
        : { orderBy?: ProgressItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgressItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressItem model
   */
  readonly fields: ProgressItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressItem model
   */
  interface ProgressItemFieldRefs {
    readonly id: FieldRef<"ProgressItem", 'String'>
    readonly name: FieldRef<"ProgressItem", 'String'>
    readonly startingPage: FieldRef<"ProgressItem", 'Int'>
    readonly currentPage: FieldRef<"ProgressItem", 'Int'>
    readonly targetPage: FieldRef<"ProgressItem", 'Int'>
    readonly position: FieldRef<"ProgressItem", 'Int'>
    readonly createdAt: FieldRef<"ProgressItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgressItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressItem findUnique
   */
  export type ProgressItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * Filter, which ProgressItem to fetch.
     */
    where: ProgressItemWhereUniqueInput
  }

  /**
   * ProgressItem findUniqueOrThrow
   */
  export type ProgressItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * Filter, which ProgressItem to fetch.
     */
    where: ProgressItemWhereUniqueInput
  }

  /**
   * ProgressItem findFirst
   */
  export type ProgressItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * Filter, which ProgressItem to fetch.
     */
    where?: ProgressItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressItems to fetch.
     */
    orderBy?: ProgressItemOrderByWithRelationInput | ProgressItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressItems.
     */
    cursor?: ProgressItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressItems.
     */
    distinct?: ProgressItemScalarFieldEnum | ProgressItemScalarFieldEnum[]
  }

  /**
   * ProgressItem findFirstOrThrow
   */
  export type ProgressItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * Filter, which ProgressItem to fetch.
     */
    where?: ProgressItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressItems to fetch.
     */
    orderBy?: ProgressItemOrderByWithRelationInput | ProgressItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressItems.
     */
    cursor?: ProgressItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressItems.
     */
    distinct?: ProgressItemScalarFieldEnum | ProgressItemScalarFieldEnum[]
  }

  /**
   * ProgressItem findMany
   */
  export type ProgressItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * Filter, which ProgressItems to fetch.
     */
    where?: ProgressItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressItems to fetch.
     */
    orderBy?: ProgressItemOrderByWithRelationInput | ProgressItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressItems.
     */
    cursor?: ProgressItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressItems.
     */
    skip?: number
    distinct?: ProgressItemScalarFieldEnum | ProgressItemScalarFieldEnum[]
  }

  /**
   * ProgressItem create
   */
  export type ProgressItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * The data needed to create a ProgressItem.
     */
    data: XOR<ProgressItemCreateInput, ProgressItemUncheckedCreateInput>
  }

  /**
   * ProgressItem createMany
   */
  export type ProgressItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressItems.
     */
    data: ProgressItemCreateManyInput | ProgressItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressItem createManyAndReturn
   */
  export type ProgressItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressItems.
     */
    data: ProgressItemCreateManyInput | ProgressItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressItem update
   */
  export type ProgressItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * The data needed to update a ProgressItem.
     */
    data: XOR<ProgressItemUpdateInput, ProgressItemUncheckedUpdateInput>
    /**
     * Choose, which ProgressItem to update.
     */
    where: ProgressItemWhereUniqueInput
  }

  /**
   * ProgressItem updateMany
   */
  export type ProgressItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressItems.
     */
    data: XOR<ProgressItemUpdateManyMutationInput, ProgressItemUncheckedUpdateManyInput>
    /**
     * Filter which ProgressItems to update
     */
    where?: ProgressItemWhereInput
    /**
     * Limit how many ProgressItems to update.
     */
    limit?: number
  }

  /**
   * ProgressItem updateManyAndReturn
   */
  export type ProgressItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * The data used to update ProgressItems.
     */
    data: XOR<ProgressItemUpdateManyMutationInput, ProgressItemUncheckedUpdateManyInput>
    /**
     * Filter which ProgressItems to update
     */
    where?: ProgressItemWhereInput
    /**
     * Limit how many ProgressItems to update.
     */
    limit?: number
  }

  /**
   * ProgressItem upsert
   */
  export type ProgressItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * The filter to search for the ProgressItem to update in case it exists.
     */
    where: ProgressItemWhereUniqueInput
    /**
     * In case the ProgressItem found by the `where` argument doesn't exist, create a new ProgressItem with this data.
     */
    create: XOR<ProgressItemCreateInput, ProgressItemUncheckedCreateInput>
    /**
     * In case the ProgressItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressItemUpdateInput, ProgressItemUncheckedUpdateInput>
  }

  /**
   * ProgressItem delete
   */
  export type ProgressItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
    /**
     * Filter which ProgressItem to delete.
     */
    where: ProgressItemWhereUniqueInput
  }

  /**
   * ProgressItem deleteMany
   */
  export type ProgressItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressItems to delete
     */
    where?: ProgressItemWhereInput
    /**
     * Limit how many ProgressItems to delete.
     */
    limit?: number
  }

  /**
   * ProgressItem without action
   */
  export type ProgressItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressItem
     */
    select?: ProgressItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressItem
     */
    omit?: ProgressItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProgressItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startingPage: 'startingPage',
    currentPage: 'currentPage',
    targetPage: 'targetPage',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgressItemScalarFieldEnum = (typeof ProgressItemScalarFieldEnum)[keyof typeof ProgressItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProgressItemWhereInput = {
    AND?: ProgressItemWhereInput | ProgressItemWhereInput[]
    OR?: ProgressItemWhereInput[]
    NOT?: ProgressItemWhereInput | ProgressItemWhereInput[]
    id?: StringFilter<"ProgressItem"> | string
    name?: StringFilter<"ProgressItem"> | string
    startingPage?: IntFilter<"ProgressItem"> | number
    currentPage?: IntFilter<"ProgressItem"> | number
    targetPage?: IntFilter<"ProgressItem"> | number
    position?: IntFilter<"ProgressItem"> | number
    createdAt?: DateTimeFilter<"ProgressItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressItem"> | Date | string
  }

  export type ProgressItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressItemWhereInput | ProgressItemWhereInput[]
    OR?: ProgressItemWhereInput[]
    NOT?: ProgressItemWhereInput | ProgressItemWhereInput[]
    name?: StringFilter<"ProgressItem"> | string
    startingPage?: IntFilter<"ProgressItem"> | number
    currentPage?: IntFilter<"ProgressItem"> | number
    targetPage?: IntFilter<"ProgressItem"> | number
    position?: IntFilter<"ProgressItem"> | number
    createdAt?: DateTimeFilter<"ProgressItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressItem"> | Date | string
  }, "id">

  export type ProgressItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgressItemCountOrderByAggregateInput
    _avg?: ProgressItemAvgOrderByAggregateInput
    _max?: ProgressItemMaxOrderByAggregateInput
    _min?: ProgressItemMinOrderByAggregateInput
    _sum?: ProgressItemSumOrderByAggregateInput
  }

  export type ProgressItemScalarWhereWithAggregatesInput = {
    AND?: ProgressItemScalarWhereWithAggregatesInput | ProgressItemScalarWhereWithAggregatesInput[]
    OR?: ProgressItemScalarWhereWithAggregatesInput[]
    NOT?: ProgressItemScalarWhereWithAggregatesInput | ProgressItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressItem"> | string
    name?: StringWithAggregatesFilter<"ProgressItem"> | string
    startingPage?: IntWithAggregatesFilter<"ProgressItem"> | number
    currentPage?: IntWithAggregatesFilter<"ProgressItem"> | number
    targetPage?: IntWithAggregatesFilter<"ProgressItem"> | number
    position?: IntWithAggregatesFilter<"ProgressItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProgressItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgressItem"> | Date | string
  }

  export type ProgressItemCreateInput = {
    id?: string
    name: string
    startingPage: number
    currentPage: number
    targetPage: number
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressItemUncheckedCreateInput = {
    id?: string
    name: string
    startingPage: number
    currentPage: number
    targetPage: number
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingPage?: IntFieldUpdateOperationsInput | number
    currentPage?: IntFieldUpdateOperationsInput | number
    targetPage?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingPage?: IntFieldUpdateOperationsInput | number
    currentPage?: IntFieldUpdateOperationsInput | number
    targetPage?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressItemCreateManyInput = {
    id?: string
    name: string
    startingPage: number
    currentPage: number
    targetPage: number
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingPage?: IntFieldUpdateOperationsInput | number
    currentPage?: IntFieldUpdateOperationsInput | number
    targetPage?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingPage?: IntFieldUpdateOperationsInput | number
    currentPage?: IntFieldUpdateOperationsInput | number
    targetPage?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProgressItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressItemAvgOrderByAggregateInput = {
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
  }

  export type ProgressItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressItemSumOrderByAggregateInput = {
    startingPage?: SortOrder
    currentPage?: SortOrder
    targetPage?: SortOrder
    position?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}